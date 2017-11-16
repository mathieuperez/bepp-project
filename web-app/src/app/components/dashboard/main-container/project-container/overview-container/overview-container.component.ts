import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppConstants} from "../../../../../app-constants";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiCallingObserverService} from "../../../../../services/api-call-observer.service";
import {CheckAuthService} from "../../../../../services/check-auth.service";

@Component({
    templateUrl: './overview-container.component.html',
    styleUrls: ['./overview-container.component.css']
})
export class OverviewContainerComponent implements OnInit {

    showAddMember = false;

    private loading: boolean;
    private currentProject: any;
    private routeParamsSub: Subscription;

    private addMemberForm: FormGroup;
    private addMemberFormSubmitted: boolean;
    private addMemberFormLoading: boolean;

    private errorMessageAddMember: string;

    private availabledRole = [
        {id: 0, name: "Développeur"},
        {id: 1, name: "Product Owner"}
    ];

    public constructor(private httpClient: HttpClient,
                       private activatedRoute: ActivatedRoute,
                       private checkAuthService: CheckAuthService) {
        this.loading = true;
        this.errorMessageAddMember = null;
    }

    public ngOnInit(): void {
        this.loading = true;

        this.addMemberFormSubmitted = false;
        this.addMemberFormLoading = false;

        this.addMemberForm = new FormGroup ({
            login: new FormControl('', [Validators.required]),
            role: new FormControl('', [Validators.required])
        });

        this.addMemberForm.setValue({
            login: null,
            role: 0
        });

        this.routeParamsSub = this.activatedRoute.parent.params.subscribe((params) => {
            this.getProject (params['name']);
        });
    }

    private getProject (projectName: string) {
        let httpParams = new HttpParams()
            .set('token', localStorage.getItem(AppConstants.ACCESS_COOKIE_NAME));

        projectName = encodeURIComponent(projectName);

        this.httpClient.get(`/api/projects/${projectName}`,{
            params: httpParams,
            responseType: 'json'
        }).subscribe((response: any) => {
            this.loading = false;
            this.currentProject = response[0];
        }, (error) => {
            this.loading = false;
            this.checkAuthService.check(error);
        });
    }

    public ngOnDestroy (): void {
        this.routeParamsSub.unsubscribe();
        this.routeParamsSub = null;
    }

    toggleAddMember() {
        //TODO: get members from the API
        this.showAddMember = !this.showAddMember;
    }

    public submitAddMemberForm(): void {
        this.addMemberFormSubmitted = true;

        if (this.addMemberForm.valid && !this.addMemberFormLoading){
            this.addMemberFormLoading = true;

            const sendingParams = Object.assign({},
                this.addMemberForm.value,
                {
                    token: localStorage.getItem(AppConstants.ACCESS_COOKIE_NAME)
                });

            sendingParams.role = this.availabledRole[sendingParams.role].name;

            const userLogin = encodeURIComponent(this.addMemberForm.value.login);
            const projectName = encodeURIComponent(this.currentProject.name);
            this.httpClient.put(`/api/projects/${projectName}/users/${userLogin}`,
                sendingParams,{
                    responseType: 'json'
                }
            ).subscribe((response: any) => {
                this.addMemberFormLoading = false;
                this.getProject (this.currentProject.name);
                this.showAddMember = !this.showAddMember;
                this.errorMessageAddMember = null;
                this.login.setValue(null);
                this.addMemberFormSubmitted = false;
            }, (error) => {
                this.addMemberFormLoading = false;

                if (error.status === 404){
                    this.errorMessageAddMember = `Aucun utilisateur trouvé`;
                }

                this.checkAuthService.check(error);
            });
        }
    }

    public get login (): AbstractControl {
        return this.addMemberForm.get('login');
    }

}

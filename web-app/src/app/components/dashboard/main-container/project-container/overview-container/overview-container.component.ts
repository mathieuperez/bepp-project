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

    public constructor(private httpClient: HttpClient,
                       private activatedRoute: ActivatedRoute,
                       private checkAuthService: CheckAuthService) {
        this.loading = true;
    }

    public ngOnInit(): void {
        this.loading = true;

        this.addMemberFormSubmitted = false;

        this.addMemberForm = new FormGroup ({
            login: new FormControl('', [Validators.required]),
            role: new FormControl('', [Validators.required])
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

            this.currentProject.users = [];
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

        console.log (this.addMemberForm)
        console.log (this.addMemberFormLoading)

        if (this.addMemberForm.valid && !this.addMemberFormLoading){
            this.addMemberFormLoading = true;

            const sendingParams = Object.assign({},
                this.addMemberForm.value,
                {
                    token: localStorage.getItem(AppConstants.ACCESS_COOKIE_NAME)
                });

            const userLogin = encodeURIComponent(localStorage.getItem(AppConstants.LOGIN_USER));
            const projectName = encodeURIComponent(localStorage.getItem(this.currentProject.name));
            this.httpClient.put(`/api/projects/${projectName}/users/${userLogin}`,
                sendingParams,{
                    responseType: 'json'
                }
            ).subscribe((response: any) => {
                this.addMemberFormLoading = false;
                this.getProject (this.currentProject.name)
            }, (error) => {
                this.addMemberFormLoading = false;
                this.checkAuthService.check(error);
            });
        }

        //TODO: associate member to project on the API
        this.showAddMember = !this.showAddMember;
    }

    public get login (): AbstractControl {
        return this.addMemberForm.get('login');
    }
}

import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../../app-constants";
import {CheckAuthService} from "../../../services/check-auth.service";
import {ApiCallingObserverService} from "../../../services/api-call-observer.service";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-projects-bar',
  templateUrl: './projects-bar.component.html',
  styleUrls: ['./projects-bar.component.css']
})
export class ProjectsBarComponent implements OnInit, OnDestroy {

    private projectsLoading: boolean;

    private projectsList: Array<string>;

    private updateListProjectSub: Subscription;

    public constructor(private httpClient: HttpClient,
                       private checkAuthService: CheckAuthService,
                       private apiCallingObserverService: ApiCallingObserverService) {
        this.projectsLoading = false;
        this.projectsList = [];
    }

    public ngOnInit(): void {
        this.updateProjectList();
        this.updateListProjectSub = this.apiCallingObserverService.updateListProject.subscribe(() => {
            this.updateProjectList();
        })
    }

    private updateProjectList () {
        const userLogin = encodeURIComponent(localStorage.getItem(AppConstants.LOGIN_USER));
        this.httpClient.get(`/api/users/${userLogin}`,
            {
                responseType: 'json'
            }
        ).subscribe((response: any) => {
            this.projectsLoading = false;
            this.projectsList = response.projects || [];
            if (!localStorage.getItem(AppConstants.LOGIN_USER)) {
                localStorage.setItem(AppConstants.LOGIN_USER, response.login);
            }
        }, (error) => {
            this.projectsLoading = false;
            this.checkAuthService.check(error);
        });
    }

    public ngOnDestroy (): void {
        this.updateListProjectSub.unsubscribe();
        this.updateListProjectSub = null;
    }
}

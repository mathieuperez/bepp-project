import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../../app-constants";
import {CheckAuthService} from "../../../services/check-auth.service";


@Component({
  selector: 'app-projects-bar',
  templateUrl: './projects-bar.component.html',
  styleUrls: ['./projects-bar.component.css']
})
export class ProjectsBarComponent implements OnInit {

    private projectsLoading: boolean;

    private projectsList: Array<string>;

    public constructor(private httpClient: HttpClient,
                       private checkAuthService: CheckAuthService) {
        this.projectsLoading = false;
        this.projectsList = [];
    }

    public ngOnInit(): void {

        const userLogin = encodeURIComponent(localStorage.getItem(AppConstants.LOGIN_USER));
        this.httpClient.get(`/api/users/${userLogin}`,
            {
                responseType: 'json'
            }
        ).subscribe((response: any) => {
            this.projectsLoading = false;
            this.projectsList = response.projects || [];
        }, (error) => {

          this.projectsLoading = false;

          this.checkAuthService.check(error);

          if (error.status !== 401) {
              //this.newProjectMessage = `Une erreur inconnue s'est produite, veuillez réessayer plutard`;
          }
        });
  }

  newProject() {
      //this.router.navigate(['dashboard/newproject']);
  }
}

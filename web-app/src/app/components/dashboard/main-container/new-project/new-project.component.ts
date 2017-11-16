import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../../../app-constants";
import {CheckAuthService} from "../../../../services/check-auth.service";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

    private newProjectForm: FormGroup;

    private newProjectLoading: boolean;
    private newProjectSubmitted: boolean;
    private newProjectMessage: string;

    public constructor(private httpClient: HttpClient,
                       private checkAuthService: CheckAuthService) { }

    public ngOnInit(): void {
        this.newProjectSubmitted = false;
        this.newProjectLoading = false;
        this.newProjectMessage = null;

        this.newProjectForm = new FormGroup({
            'name': new FormControl('', [Validators.required]),
            'date': new FormControl(''),
            'nbSprints': new FormControl(''),
            'nbDurationSprint': new FormControl(''),
            'description': new FormControl('')
        })
    }

    public get name (): AbstractControl {
        return this.newProjectForm.get ('name');
    }

    public newProjectSubmit () {
        this.newProjectSubmitted = true;
        if (this.newProjectForm.valid && !this.newProjectLoading) {
            this.newProjectLoading = true;

            const body = Object.assign ({},
                this.newProjectForm.value,
                {
                    token: localStorage.getItem(AppConstants.ACCESS_COOKIE_NAME)
                });

            this.httpClient.post("/api/projects",
                body, {
                    responseType: 'json'
                }
            ).subscribe((response: any) => {
                this.newProjectLoading = false;




            }, (error) => {
                console.log (error);
                this.newProjectLoading = false;

                this.checkAuthService.check(error);

                if (error.status !== 401) {
                    this.newProjectMessage = `Une erreur inconnue s'est produite, veuillez réessayer plutard`;
                }
            });
        }
    }

}

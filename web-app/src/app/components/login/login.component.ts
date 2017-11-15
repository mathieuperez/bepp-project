import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app-constants";

/**
 * Define logic of the login page of the application.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;

    private loginLoading: boolean;

    private loginSubmitted: boolean;

    /**
     * LoginComponent constructor.
     * @param {Router} router
     * @param {HttpClient} httpClient
     */
    public constructor(private router: Router,
                       private httpClient: HttpClient) { }

    /**
     * Initialize FormGroup for login form.
     */
    public ngOnInit(): void {
        this.loginLoading = false;
        this.loginSubmitted = false;
        this.loginForm = new FormGroup({
            login: new FormControl('', [ Validators.required ]),
            password: new FormControl('', [ Validators.required ])
        });

        console.log (this.loginForm);
    }

    //this.router.navigate(['/dashboard']);
    /**
     * Submit the login form.
     */
    public submitLoginForm(): void {
        this.loginSubmitted = true;
        if (this.loginForm.valid){
            this.loginLoading = true;
            this.httpClient.post("/api/users/token",
                this.loginForm.value,{
                    responseType: 'json'
                }
            ).subscribe((response: any) => {
                this.loginLoading = false;
                localStorage.setItem(AppConstants.ACCESS_COOKIE_NAME, response['token']);
                this.router.navigate(['/dashboard']);
            }, (response) => {
                this.loginLoading = false;
                console.log ("ERROR")
                console.log (response)
            });
        }
    }

    public get login (): AbstractControl { return this.loginForm.get('login'); }
    public get password (): AbstractControl { return this.loginForm.get('password'); }

    toSignup() {
        this.router.navigate(['/signup']);
    }
}

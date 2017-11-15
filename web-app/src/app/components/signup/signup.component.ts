import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    login() {
        this.router.navigate(['/dashboard']);
    }

    signup() {
        this.router.navigate(['/dashboard']);
    }
}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-projects-bar',
  templateUrl: './projects-bar.component.html',
  styleUrls: ['./projects-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsBarComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {

  }

  newProject() {
      this.router.navigate(['dashboard/newproject']);
  }
}

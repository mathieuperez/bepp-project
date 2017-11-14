import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MembresContainerComponent} from './dashboard/main-container/project-container/membres-container/membres-container.component';
import {BacklogContainerComponent} from './dashboard/main-container/project-container/backlog-container/backlog-container.component';
import {SprintsContainerComponent} from './dashboard/main-container/project-container/sprints-container/sprints-container.component';
import {SignupComponent} from "./signup/signup.component";
import {NewProjectComponent} from "./dashboard/main-container/new-project/new-project.component";
import {ProjectContainerComponent} from "./dashboard/main-container/project-container/project-container.component";

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'projects', component: ProjectContainerComponent, children: [
          {path: 'membres', component: MembresContainerComponent},
          {path: 'backlog', component: BacklogContainerComponent},
          {path: 'sprints', component: SprintsContainerComponent}
      ]},
      {path: 'newproject', component: NewProjectComponent}
  ]},
   {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}

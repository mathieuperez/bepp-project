import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MembresContainerComponent} from './dashboard/main-container/membres-container/membres-container.component';
import {BacklogContainerComponent} from './dashboard/main-container/backlog-container/backlog-container.component';
import {SprintsContainerComponent} from './dashboard/main-container/sprints-container/sprints-container.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'membres', component: MembresContainerComponent},
    {path: 'backlog', component: BacklogContainerComponent},
    {path: 'sprints', component: SprintsContainerComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}


import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectsBarComponent} from './dashboard/projects-bar/projects-bar.component';
import {TopBarComponent} from './dashboard/top-bar/top-bar.component';
import {MainContainerComponent} from './dashboard/main-container/main-container.component';
import {ProjectBarComponent} from './dashboard/projects-bar/project/project.component';
import {MembresContainerComponent} from './dashboard/main-container/membres-container/membres-container.component';
import {BacklogContainerComponent} from './dashboard/main-container/backlog-container/backlog-container.component';
import {SprintsContainerComponent} from './dashboard/main-container/sprints-container/sprints-container.component';
import {SprintComponent} from './dashboard/main-container/sprints-container/sprint/sprint.component';
import {DropdownDirective} from "./directives/dropdown.directive";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProjectsBarComponent,
    TopBarComponent,
    MainContainerComponent,
    ProjectBarComponent,
    MembresContainerComponent,
    BacklogContainerComponent,
    SprintsContainerComponent,
    SprintComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

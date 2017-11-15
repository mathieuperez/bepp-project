import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MembresContainerComponent} from './components/dashboard/main-container/project-container/membres-container/membres-container.component';
import {BacklogContainerComponent} from './components/dashboard/main-container/project-container/backlog-container/backlog-container.component';
import {SprintsContainerComponent} from './components/dashboard/main-container/project-container/sprints-container/sprints-container.component';
import {SignupComponent} from "./components/signup/signup.component";
import {NewProjectComponent} from "./components/dashboard/main-container/new-project/new-project.component";
import {ProjectContainerComponent} from "./components/dashboard/main-container/project-container/project-container.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'projects',
                component: ProjectContainerComponent,
                children: [
                    { path: 'membres', component: MembresContainerComponent },
                    { path: 'backlog', component: BacklogContainerComponent },
                    { path: 'sprints', component: SprintsContainerComponent }
                ]
            },
            { path: 'newproject', component: NewProjectComponent }
    ]},

    {
        path: 'signup',
        component: SignupComponent
    },

    // Default
    { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

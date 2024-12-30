import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { guardGuard } from './guard/guard.guard';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChartAndGraphComponent } from './chart-and-graph/chart-and-graph.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';

export const routes: Routes = [
    {
        path:'signup',component:SignupComponent
    },
    {
        path:'addtocart',component:AddtocartComponent, data: { roles: ['user'] }
    },
    {
        path:'admindashboard',component:AdminDashboardComponent, data: { roles: ['admin'] }
    },
    {
        path:'chart',component:ChartAndGraphComponent, data: { roles: ['admin'] }

    },
    {
        path:'upload-video',component:VideoUploadComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'home',component:HomeComponent,data:{roles:['user']}
    },
    {
        path:'',component:LoginComponent,pathMatch:'full'
    },
];

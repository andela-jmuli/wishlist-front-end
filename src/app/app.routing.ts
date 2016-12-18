import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { BucketlistsComponent } from './bucketlists/index';
import { BucketlistDetailComponent } from './bucketlist-detail/index';
import { AuthGuard } from './_services/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'bucketlists', component: BucketlistsComponent, canActivate: [AuthGuard]},
    { path: 'bucketlists/:id', component: BucketlistDetailComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes);
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { BucketlistsComponent } from './bucketlists/index';
import { BucketlistDetailComponent } from './bucketlist-detail/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'bucketlists', component: BucketlistsComponent},
    { path: 'bucketlists/:id', component: BucketlistDetailComponent },

    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
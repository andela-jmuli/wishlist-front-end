import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AuthenticationService, UsersService, BucketlistService, ItemsService } from './_services/index';
import { BucketlistsComponent } from './bucketlists/bucketlists.component';
import { BucketlistDetailComponent } from './bucketlist-detail/bucketlist-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, BucketlistsComponent, BucketlistDetailComponent, ItemDetailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthenticationService, UsersService, BucketlistService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

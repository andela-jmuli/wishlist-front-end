import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private _auth: AuthenticationService){}

    canActivate(): boolean{
        if(this._auth.isAuthenticated()){
            return this._auth.isAuthenticated();
        };
        this.router.navigate(['login']);
        return false;
    }
}
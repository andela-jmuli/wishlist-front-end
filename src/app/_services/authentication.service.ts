import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://wishlistcp.herokuapp.com/auth/login/', JSON.stringify({username: username, password: password}), { headers: headers}).map(
      (response: Response) => {
        let user = response.json();
        if (user && user.auth_token){
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }
    );
  }

  logout(){
    localStorage.removeItem('currentUser')
  }

}

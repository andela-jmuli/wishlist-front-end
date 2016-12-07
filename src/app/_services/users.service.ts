import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  create(user: User){
    return this.http.post('https://wishlistcp.herokuapp.com/auth/register/', user, this.jwt()).map((response: Response) => response.json());
  }

  // helper method
  private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.auth_token){
      let headers = new Headers({ 'Authorization': 'Token '+ currentUser.auth_token });
      headers.append('Access-Control-Allow-Origin', '*');
      return new RequestOptions({ headers: headers});
    }
  }
}

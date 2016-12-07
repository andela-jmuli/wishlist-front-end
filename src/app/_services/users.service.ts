import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  create(user: User){
    return this.http.post('https://wishlistcp.herokuapp.com/auth/register/', user)
  }
}

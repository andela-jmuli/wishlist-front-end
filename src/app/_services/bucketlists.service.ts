import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bucketlist } from '../models/bucketlist';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BucketlistService {

  constructor(private http: Http) { }

  create(bucketlist: Bucketlist){
    return this.http.post('https://secret-ridge-68835.herokuapp.com/bucketlists/', bucketlist, this.jwt()).map((response: Response) => response.json());
  }

  get_all_bucketlists() : Observable<Bucketlist[]>{
    return this.http.get('https://secret-ridge-68835.herokuapp.com/bucketlists/', this.jwt()).map((response: Response) => <Bucketlist[]>response.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  get_single_bucketlist(id: number){
    return this.http.get('https://secret-ridge-68835.herokuapp.com/bucketlists/'+ id + '/', this.jwt()).map((response: Response) => response.json());
  }
  update_bucketlist(id: number, name : string){
    let data = JSON.stringify({"name": name})
    return this.http.put('https://secret-ridge-68835.herokuapp.com/bucketlists/'+ id + '/',data, this.jwt())
    .map((response: Response) => response.json());
  }
  delete_bucketlist(id: number){
    return this.http.delete('https://secret-ridge-68835.herokuapp.com/bucketlists/'+ id + '/', this.jwt()).map((response: Response) => response.json());
  }

  // helper method for auth
  private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.auth_token){
      let headers = new Headers({ 'Authorization': 'Token '+ currentUser.auth_token });
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json')
      return new RequestOptions({ headers: headers});
    }
  }
}
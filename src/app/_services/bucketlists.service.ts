import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bucketlist } from '../models/bucketlist';

@Injectable()
export class BucketlistService {

  constructor(private http: Http) { }

  create(bucketlist: Bucketlist){
    return this.http.post('https://wishlistcp.herokuapp.com/bucketlists/', bucketlist, this.jwt()).map((response: Response) => response.json());
  }
  get_all_bucketlists(){
    return this.http.get('https://wishlistcp.herokuapp.com/bucketlists/', this.jwt()).map((response: Response) => <Bucketlist[]>response.json());
  }
  get_single_bucketlist(id: number){
    return this.http.get('https://wishlistcp.herokuapp.com/bucketlists/'+ id, this.jwt()).map((response: Response) => response.json());
  }
  update_bucketlist(bucketlist: Bucketlist){
    return this.http.put('https://wishlistcp.herokuapp.com/bucketlists/'+ bucketlist.id, bucketlist, this.jwt()).map((response: Response) => response.json());
  }
  delete_bucketlist(id: number){
    return this.http.delete('https://wishlistcp.herokuapp.com/bucketlists/'+ id, this.jwt()).map((response: Response) => response.json());
  }

  // helper method for auth
  private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.auth_token){
      let headers = new Headers({ 'Authorization': 'Token '+ currentUser.auth_token });
      headers.append('Accept', 'application/json');
      return new RequestOptions({ headers: headers});
    }
  }
}
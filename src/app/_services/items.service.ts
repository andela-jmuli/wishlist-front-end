import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bucketlist } from '../models/bucketlist';

@Injectable()
export class ItemsService {
  private dataUrl: string;

  constructor(private http: Http) {
    this.dataUrl = 'https://wishlistcp.herokuapp.com/bucketlists/';
   }

  create_item(bucketlist_id: number, item_name){
    return this.http.post(this.dataUrl+bucketlist_id+'/items/', item_name, this.jwt()).map((response: Response) => response.json());
  }

  delete_item(bucketlist_id: number, item_id: number){
    return this.http.post(this.dataUrl+bucketlist_id+'/items/'+item_id, this.jwt()).map((response: Response) => response.json());
  }


  private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.auth_token){
      let headers = new Headers({ 'Authorization': 'Token '+ currentUser.auth_token });
      headers.append('Accept', 'application/json');
      return new RequestOptions({ headers: headers});
    }
  }

}

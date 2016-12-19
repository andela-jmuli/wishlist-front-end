import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bucketlist, Items} from '../models/bucketlist';

@Injectable()
export class ItemsService {
  private dataUrl: string;

  constructor(private http: Http) {
    this.dataUrl = 'https://secret-ridge-68835.herokuapp.com/bucketlists/';
   }

  create_item(bucketlist_id: number, item: Items){
    return this.http.post(this.dataUrl+bucketlist_id+'/items/', JSON.stringify(item), this.jwt()).map((response: Response) => response.json());
  }
  
  update_item(bucketlist_id: number, itemId: number, itemName: string, is_done:boolean){
    let data = JSON.stringify({"item_name": itemName, "is_done": is_done})
    return this.http.put(this.dataUrl+bucketlist_id+'/items/' + itemId+ '/', data, this.jwt()).map((response: Response) => response.json());
  }

  delete_item(bucketlist_id: number, itemId: number){
    return this.http.delete(this.dataUrl+bucketlist_id+'/items/'+itemId + '/', this.jwt()).map((response: Response) => response.json());
  }


  private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.auth_token){
      let headers = new Headers({ 'Authorization': 'Token '+ currentUser.auth_token });
      headers.append('Content-Type', 'application/json');
      return new RequestOptions({ headers: headers});
    }
  }

}

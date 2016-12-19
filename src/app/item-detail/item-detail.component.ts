import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Bucketlist, Items } from '../models/bucketlist'
import { EmitterService, ItemsService } from '../_services/index';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Items;
  @Input() i: number;
  @Input() bucketlistId: number;
  @Input() editId: string;

  model: any = {};
  itemName: string;
  itemId: number;
  loading = false;
  is_done: boolean;
  responseItems: string

  private itemModel = new Items();
  private editing = false;
  


  constructor(private itemService: ItemsService, private router: Router, public toastr: ToastsManager) { }

  ngOnInit() {
    this.itemName = this.item.item_name;
    this.itemId = this.item.id
    this.is_done = this.item.is_done
  }


  updateItem(bucketlistId, itemId, itemName, is_done){
    
    this.itemService.update_item(this.bucketlistId, this.itemId, itemName, this.is_done).subscribe(
      data => {
        this.toastr.success('Item Successfully Updated!');
      },
      error => {
        console.log(error)
      }
    );
  }


  deleteItem(bucketlistId, itemId){
    
    this.itemService.delete_item(bucketlistId, this.itemId).subscribe(
      data => {
        this.router.navigate(['/bucketlists']);
        this.toastr.success('Item Successfully Deleted!');
      },
      error => {
        console.log(error);
      }
    );
  }

}

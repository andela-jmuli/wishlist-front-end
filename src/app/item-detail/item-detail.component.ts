import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Bucketlist, Items } from '../models/bucketlist'
import { EmitterService, ItemsService } from '../_services/index';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PaginationInstance } from 'ng2-pagination';


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
  @Input() itemData: Items[];
  model: any = {};
  itemName: string;
  itemId: number;
  is_done:any = false;
  responseItems: string

  private itemModel = new Items();
  private editing = false;
  
 // pagination config
  config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 9,
    currentPage: 1
  };

  onPageChange(number: number){
    this.config.currentPage = number;
  }

  constructor(private itemService: ItemsService, private router: Router, public toastr: ToastsManager) { }

  ngOnInit() {
    this.itemName = this.item.item_name;
    this.itemId = this.item.id
    this.is_done = this.item.is_done
  }


  updateItem(bucketlistId, itemId, itemName, is_done, index){
    this.itemService.update_item(this.bucketlistId, this.itemId, itemName, this.is_done).subscribe(
      data => {
        this.itemName = itemName; 
        this.toastr.success('Item Successfully Updated!');
      },
      error => {
        console.log(error.json().item_name);
        let nameError = error.json().item_name;
        if (nameError){
          this.toastr.error('You cannot send a blank name');
        }
        else{
          this.toastr.error(error.json().item_name);
        }
      }
    );
  }

  logChange(event){
    this.is_done = event
  }


  deleteItem(bucketlistId, index, itemId){
    
    this.itemService.delete_item(bucketlistId, this.itemId).subscribe(
      data => {
        this.itemData.splice(index, 1);
        this.toastr.success('Item Successfully Deleted!');
      },
      error => {
        console.log(error);
        this.toastr.error(error);
      }
    );
  }

}

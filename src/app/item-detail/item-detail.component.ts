import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Bucketlist, Items } from '../models/bucketlist'
import { EmitterService, ItemsService } from '../_services/index';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Items;
  @Input() i: number;
  @Input() bucketlistId: number;
  model: any = {};
  itemName: string;
  itemId: number;
  loading = false;
  is_done: boolean;

  @Input() editId: string;

  private itemModel = new Items();
  private editing = false;

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemName = this.item.item_name;
    this.itemId = this.item.id
    this.is_done = this.item.is_done
  }

  updateItem(bucketlistId, itemId, itemName, is_done){
    
    this.itemService.update_item(this.bucketlistId, this.itemId, itemName, this.is_done).subscribe(
      error => {
        console.log(error)
      }
    );
  }

  ngOnChanges(){
    EmitterService.get(this.editId).subscribe((item: Items) =>{
      this.model = item
      this.editing = true;
    });
  }

  deleteItem(bucketlistId, itemId){
    this.loading = true;
    this.itemService.delete_item(bucketlistId, this.itemId).subscribe(
      error => {
        this.loading = false;
      }
    );
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Bucketlist, Items } from '../models/bucketlist'
import { ItemsService } from '../_services/index';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Items;
  @Input() bucketlistId: number;
  itemName: string;
  itemId: number;
  loading = false;

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemName = this.item.item_name;
    this.itemId = this.item.id
   // console.log(this.item.id)
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

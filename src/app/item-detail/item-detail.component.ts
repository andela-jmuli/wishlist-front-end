import { Component, Input, OnInit } from '@angular/core';
import { Bucketlist, Items } from '../models/bucketlist'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Items;
  @Input() bucketlistId: number;
  itemName: string;

  constructor() { }

  ngOnInit() {
    this.itemName = this.item.item_name;
  }

}

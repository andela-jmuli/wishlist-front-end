import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BucketlistService, ItemsService } from '../_services/index';
import { Bucketlist, Items } from '../models/bucketlist'

@Component({
  selector: 'app-bucketlist-detail',
  templateUrl: './bucketlist-detail.component.html',
  styleUrls: ['./bucketlist-detail.component.css']
})
export class BucketlistDetailComponent implements OnInit {

  bucketlist: Bucketlist;
  item: Items;
  name: string;
  description: string;

  constructor(private router: ActivatedRoute, private bucketlistService: BucketlistService, private itemService: ItemsService ) { }

  ngOnInit() {
    var id = +this.router.snapshot.params['id'];
        this.bucketlistService.get_single_bucketlist(id).subscribe(
            bucketlist =>{
                this.bucketlist = bucketlist;
                this.name = bucketlist.name
                this.description = bucketlist.description}, 
    );
  }

  updateBucketlist(bucketlist){
    this.bucketlistService.update_bucketlist(this.bucketlist).subscribe();
  }
  createItem(bucketlist, item_name){
    this.itemService.create_item(bucketlist.id, item_name).subscribe();
  }
  deleteItem(bucketlist, item){
    this.itemService.delete_item(bucketlist.id, item.id).subscribe();
  }

}

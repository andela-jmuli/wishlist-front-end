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
  model: any = {};
  loading = false;
  bucketlist: Bucketlist;
  items: Items[];
  name: string;
  description: string;
  bucketlistId: number;

  constructor(private router: ActivatedRoute, private bucketlistService: BucketlistService, private itemService: ItemsService ) { }

  ngOnInit() {
    var id = +this.router.snapshot.params['id'];
        this.bucketlistService.get_single_bucketlist(id).subscribe(
            bucketlist =>{
                this.bucketlist = bucketlist;
                this.name = bucketlist.name;
                this.description = bucketlist.description;
                this.items = bucketlist.bucketlist_items;
                this.bucketlistId = bucketlist.id;
              }, 
    );
  }

  updateBucketlist(bucketlist){
    this.bucketlistService.update_bucketlist(this.bucketlist).subscribe();
  }
  createItem(){
    this.loading = true;
    this.itemService.create_item(this.bucketlistId, this.model)
    .subscribe(
      error => {
        this.loading = false;
      });
  }
  
  deleteItem(bucketlist, item){
    this.itemService.delete_item(bucketlist.id, item.id).subscribe();
  }

}

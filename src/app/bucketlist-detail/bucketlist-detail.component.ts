import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BucketlistService, ItemsService, EmitterService } from '../_services/index';
import { Bucketlist, Items } from '../models/bucketlist'

@Component({
  selector: 'app-bucketlist-detail',
  templateUrl: './bucketlist-detail.component.html',
  styleUrls: ['./bucketlist-detail.component.css']
})
export class BucketlistDetailComponent implements OnInit {
  model: any = {};
  loading = false;
  @Input() bucketlist: Bucketlist;
  item_data: Items[];
  name: string;
  description: string;
  bucketlistId: number;

  @Input() editId: string;

  private itemModel = new Items();
  private editing = false;

  constructor(private router: ActivatedRoute, private bucketlistService: BucketlistService, private itemService: ItemsService ) { }

  ngOnInit() {
    var id = +this.router.snapshot.params['id'];
        this.bucketlistService.get_single_bucketlist(id).subscribe(
            bucketlist =>{
                this.bucketlist = bucketlist;
                this.name = bucketlist.name;
                this.description = bucketlist.description;
                this.item_data = bucketlist.bucketlist_items;  
              },           
    );
  }
  
  createItem(bucketlistId: number){
    this.loading = true;
    this.itemService.create_item(bucketlistId, this.model)
    .subscribe(
      error => {
        this.loading = false;
      });
  }

}

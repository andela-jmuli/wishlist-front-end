import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BucketlistService, ItemsService, EmitterService } from '../_services/index';
import { Bucketlist, Items } from '../models/bucketlist'
import { PaginationInstance } from 'ng2-pagination';

@Component({
  selector: 'app-bucketlist-detail',
  templateUrl: './bucketlist-detail.component.html',
  styleUrls: ['./bucketlist-detail.component.css']
})
export class BucketlistDetailComponent implements OnInit {
  @Input() editId: string;
  @Input() bucketlist: Bucketlist;

  model: any = {};
  loading = false;
  item_data: Items[];
  responseItems: string
  name: string;
  description: string;
  bucketlistId: number;
  errorMessage: string;

  maxSize: number = 10;
  directionLinks: boolean = true;

  // pagination config
  config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };

  private itemModel = new Items();
  private editing = false;

  constructor(private router: ActivatedRoute, private bucketlistService: BucketlistService, private itemService: ItemsService ) { }

  onPageChange(number: number){
    this.config.currentPage = number;
  }

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
      data => {
        this.responseItems = data;
        this.item_data.push(data)
      },
      error => {
        console.log(error.json());
        this.errorMessage = error.json();
      });
  }

}
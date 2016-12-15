import { Component,  OnInit } from '@angular/core';
import { BucketlistService } from '../_services/index'
import { Router } from '@angular/router';
import { Bucketlist } from '../models/bucketlist'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css']
})
export class BucketlistsComponent implements OnInit {
  model: any = {};
  loading = false;
  bucketlists: Bucketlist[];
  bucketlist: Bucketlist;
  errorMessage: string;
  BucketlistId: number;
  name: string

  constructor(
    private router: Router,
    private bucketlistservice: BucketlistService
  ) { }

  create_bucketlist(){
    this.loading = true;
    this.bucketlistservice.create(this.model)
    .subscribe(
      data => {
        this.router.navigate(['/bucketlists']);
      },
      error => {
        this.loading = false;
      });
  }

  deleteBucketlist(bucketlistId){
    console.log(bucketlistId)
    this.loading = true;
    this.bucketlistservice.delete_bucketlist(bucketlistId).subscribe(
      
      data => {
        this.router.navigate(['/bucketlists']);
      },
      error => {
        this.loading = false;
        console.log(error)
      }
    );
  }
  updateBucketlist(bucketlistId, model){
    console.log(bucketlistId)
    console.log(model)
    this.bucketlistservice.update_bucketlist(bucketlistId, model).subscribe(
      error => {
        console.log(error)
      }
    );
  }
  
  ngOnInit() {
    this.bucketlistservice.get_all_bucketlists().subscribe(bucketlists => this.bucketlists = bucketlists, error => this.errorMessage = <any>error);
  }

}
// itemOperation = this.itemService.update_item(this.bucketlistId, this.itemId, this.model)

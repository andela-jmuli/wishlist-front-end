import { Component, OnInit } from '@angular/core';
import { BucketlistService } from '../_services/index'
import { Router } from '@angular/router';
import { Bucketlist } from '../models/bucketlist'

@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css']
})
export class BucketlistsComponent implements OnInit {
  model: any = {};
  loading = false;
  bucketlists: Bucketlist[];

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
  
  ngOnInit() {
    this.bucketlistservice.get_all_bucketlists().subscribe(bucketlists => this.bucketlists = bucketlists,
    );
  }

}


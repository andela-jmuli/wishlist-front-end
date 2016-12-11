import { Component, OnInit } from '@angular/core';
import { BucketlistService } from '../_services/index'
import { Router } from '@angular/router';

@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css']
})
export class BucketlistsComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private bucketlistservice: BucketlistService
  ) { }

  create_bucketlist(){
    this.loading = true;
    this.bucketlistservice.create(this.model)
    .subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        this.loading = false;
      });
  }
  
  ngOnInit() {
  }

}


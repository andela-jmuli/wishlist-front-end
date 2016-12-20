import { Component,  OnInit } from '@angular/core';
import { BucketlistService } from '../_services/index'
import { Router } from '@angular/router';
import { Bucketlist } from '../models/bucketlist'
import { NgForm } from '@angular/forms'
import { PaginationInstance } from 'ng2-pagination';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-bucketlists',
  templateUrl: './bucketlists.component.html',
  styleUrls: ['./bucketlists.component.css']
})
export class BucketlistsComponent implements OnInit {
  model: any = {};
  bucketlists: Bucketlist[];
  bucketlist: Bucketlist;
  errorMessage: string;
  errorMess: string;
  BucketlistId: number;
  name: string;
  buck: string;
  current_index;

  // pagination items
  maxSize: number = 10;
  directionLinks: boolean = true;

  // pagination config
  config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };

  constructor(
    private router: Router,
    private bucketlistservice: BucketlistService,
    public toastr: ToastsManager
  ) { }

  showSuccess() {
      this.toastr.success('Bucketlist Creation Successful!');
      }

  // pagination
  onPageChange(number: number){
    this.config.currentPage = number;
  }

  create_bucketlist(){
    this.bucketlistservice.create(this.model)
    .subscribe(
      data => {
        this.model.name=''
        this.model.description=''
        this.bucketlists.push(data)
        this.showSuccess()
      },
      error => {
        let errorOnBucketlist = error.json();
        if (errorOnBucketlist.hasOwnProperty('name')){
          this.toastr.error(errorOnBucketlist.name[0]);
          this.errorMessage = errorOnBucketlist.name[0];
        }
        else {
        this.errorMessage = error.json();
        this.toastr.error(error.json());
        }
      });
  }

  updateBucketlist(bucketlistId, model, index){
    this.bucketlistservice.update_bucketlist(bucketlistId, model).subscribe(
      data => {
        
        this.bucketlists.splice(index, 1, data);
        this.toastr.info('Update Sucessful!');   
      },
      error => {
        console.log(error.json());
        this.errorMess = error.json()[0];
        // this.toastr.error(error.json().name);
         let nameError = error.json().name;
        if (nameError){
          this.toastr.error('You cannot send a blank name');
        }
        else{
          this.toastr.error(error.json().name);
        }
      }
    );
  }

  deleteBucketlist(bucketlistId, index){
    this.bucketlistservice.delete_bucketlist(bucketlistId).subscribe(
      data => {
        this.bucketlists.splice(index, 1); 
        this.buck = data;
        this.toastr.success('Bucketlist Deletion Successful!');
      },
      error => {
        this.errorMessage = error.json();
        this.toastr.error(error.json());
      }
    );
  }
  
  ngOnInit() {
    this.bucketlistservice.get_all_bucketlists().subscribe(bucketlists => this.bucketlists = bucketlists, error => this.errorMessage = <any>error);
  }

}
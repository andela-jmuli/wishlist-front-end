import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/index';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  model: any = {};
  errorMessage: string;

  constructor(
    private router: Router,
    private userService: UsersService,
    public toastr: ToastsManager
  ) { }

  register(){
    this.userService.create(this.model)
    .subscribe(
      data => {
        this.showSuccess();
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error.json().username);
        // this.errorMessage = error.json().username;
        this.toastr.error(error.json().username);
      });
  }
  showSuccess() {
      this.toastr.success('Registration Successful');
      }

  ngOnInit() {
  }

}

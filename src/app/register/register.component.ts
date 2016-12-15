import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UsersService
  ) { }

  register(){
    this.loading = true;
    this.userService.create(this.model)
    .subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}

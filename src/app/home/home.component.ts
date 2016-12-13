import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../_services/index'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  username: string;

  constructor(private userService: UsersService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = JSON.parse(localStorage.getItem('username'));
  }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  errorMessage: string;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // resets login status
    this.authenticationService.logout();
  }
  login(){
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error.json().non_field_errors);
        this.errorMessage = error.json().non_field_errors;
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    private authenticationService: AuthenticationService,
    public toastr: ToastsManager
  ) { }

  ngOnInit() {
    // resets login status
    this.authenticationService.logout();
  }
  login(){
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(
      data => {
        this.showSuccess();
        this.router.navigate(['/']);
      },
      error => {
        console.log(error.json());
        this.errorMessage = error.json().non_field_errors;
        this.toastr.error(error.json().non_field_errors);
      }
    )
  }
  showSuccess() {
      this.toastr.success('Welcome!');
      }

}

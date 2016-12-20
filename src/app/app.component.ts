import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location: string;

  constructor(public toastr: ToastsManager, vRef: ViewContainerRef, private _router: Router) {
        this.toastr.setRootViewContainerRef(vRef);
        this.location = _router.url;
    }
}

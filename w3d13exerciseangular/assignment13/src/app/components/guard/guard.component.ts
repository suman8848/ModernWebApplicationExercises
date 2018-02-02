import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-guard',
  template: `
    <h2>
      Error!!
    </h2>
    <p> Oops!! Something went wrong... </p>

    <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
  `,
  styleUrls: ['./guard.component.css']
})
export class GuardComponent {

  constructor(private router: Router) {}

  onNavigate() {
    this.router.navigate(['/']);
  }

}

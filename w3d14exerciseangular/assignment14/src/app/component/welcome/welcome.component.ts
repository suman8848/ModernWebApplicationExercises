import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: User = new User();
  sub;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.queryParams)
    this.sub = this.route.queryParams.subscribe(
      x=> Object.assign(this.user, x)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

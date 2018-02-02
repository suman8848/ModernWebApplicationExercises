import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {UserModel} from "../../models/user.model";
import {DbService} from "../../services/db.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private subscription: Subscription;
  id: string;
  user:UserModel;
  constructor(private dbService:DbService,private activatedRoute: ActivatedRoute) {
    this.subscription= activatedRoute.params.subscribe(
      (param:any)=> {
        this.id= param['id'];
        this.user = dbService.getUserDataById(this.id);
      }
    );

  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

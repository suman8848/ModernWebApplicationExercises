import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {Router} from "@angular/router";

@Injectable()
export class DbService {

  private userData:UserModel[] = [
    new UserModel(1,"Suman Khatiwada","985944","suman.khatiwada@gmail.com"),
    new UserModel(2,"Rajesh Subedi","985923","rajesh.subedi@gmail.com"),
    new UserModel(3,"Hari Dahal","985233","hari.dahal@gmail.com"),
    new UserModel(3,"Ramesh Dhakal","985313","ramesh.dhakal@gmail.com"),
  ];

  constructor(private router:Router,) { }
  getAllUser(){
    return this.userData;
  }

  getUserDataById(id){
    let userInfo = this.userData[id-1]
    if(userInfo != undefined){
      return this.userData[id-1];
    }else{
      this.router.navigate(['./error']);
    }
  }



}

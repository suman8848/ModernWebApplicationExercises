import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../models/user.model";
import {DbService} from "../../services/db.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
    users: UserModel[];

  constructor(private dbService:DbService) {
    this.users = dbService.getAllUser();
  }

  ngOnInit() {
  }

}

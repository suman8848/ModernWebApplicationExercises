import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GuardComponent } from './components/guard/guard.component';
import {routes} from "./app.route";
import {DbService} from "./services/db.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    GuardComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

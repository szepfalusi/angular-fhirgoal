import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { GoalService } from "../app/services/goal.service";
import { environment } from 'src/environments/environment';
import { ModalformComponent } from './modalform/modalform.component';
import { GoalsComponent } from './goals/goals.component';




@NgModule({
  declarations: [
    AppComponent,
    ModalformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [GoalService],
  bootstrap: [AppComponent],
  entryComponents: [ModalformComponent]
})
export class AppModule { }

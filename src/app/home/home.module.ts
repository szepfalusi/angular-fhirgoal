import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home.component';
import { GoalsModule } from '../goals/goals.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    GoalsModule
  ],
  exports: [HomeComponent]

})
export class HomeModule { }

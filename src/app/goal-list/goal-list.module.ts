import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalListComponent } from "./goal-list.component";
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [GoalListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [GoalListComponent]
})
export class GoalListModule { }

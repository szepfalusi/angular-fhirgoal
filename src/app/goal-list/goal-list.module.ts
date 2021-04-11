import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalListComponent } from "./goal-list.component";


@NgModule({
  declarations: [GoalListComponent],
  imports: [
    CommonModule
  ],
  exports: [GoalListComponent]
})
export class GoalListModule { }

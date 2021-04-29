import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Goal } from '../services/goal.model';
import { GoalService } from "../services/goal.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})

export class ModalformComponent implements OnInit {
  selectedGoal: Goal;
  selected = "proposed"

  constructor(public goalService: GoalService,
    public dialogRef: MatDialogRef<ModalformComponent>) { }

  ngOnInit(): void {
    this.selected = this.goalService.goaltoEdit?.lifecycleStatus;

  }
  ngAfterViewInit()	{

  }

  updateGoal(){
    this.goalService.goaltoEdit.lifecycleStatus = this.selected as Goal["lifecycleStatus"];
    this.goalService.updateGoalStatus(this.goalService.goaltoEdit);
    this.dialogRef.close();
  }


}

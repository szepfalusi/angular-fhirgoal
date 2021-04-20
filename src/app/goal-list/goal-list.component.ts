import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ModalformComponent } from '../modalform/modalform.component';
import { Goal } from '../services/goal.model';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {
  goals: Goal[]; //This array contains the getGoals() data, which used in ngOnInit()
  formEdit: boolean = false;
  goaltoEdit: Goal; 

  constructor(public goalService: GoalService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.goalService.getGoals().subscribe(data =>{
      this.goals = data;
      
      this.goals.sort((a,b) => a.lifecycleStatus.localeCompare(b.lifecycleStatus));
    });
  }

  deleteGoal(){
    alert('szoker');
  }

  editGoal(goal){
    this.formEdit = true;
    this.goaltoEdit = goal; 

    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modalform-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalformComponent, dialogConfig);
  }

}

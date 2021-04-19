import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../services/goal.model';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {
  goals: Goal[];

  constructor(public goalService: GoalService) { }

  ngOnInit(): void {
    this.goalService.getOrders().subscribe(data =>{
      this.goals = data;
      //this.goals.sort((a,b) => a.identifier[0].value.localeCompare(b.identifier[0].value));
    });
  }

}

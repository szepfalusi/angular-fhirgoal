import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Goal } from "../services/goal.model";
import { GoalService } from "../services/goal.service";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals = [];
  priority = new FormControl();
  selectedStatusCode: "proposed";

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  constructor(public goalService: GoalService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.goalService.form.value.priority = this.priority.value;
    this.goalService.form.value.lifecycleStatus = this.selectedStatusCode;
    let data = this.goalService.form.value;
    

    this.goalService.createGoal(data)
    .then(res =>{
      alert("The goal is documented.");
      this.goalService.form.reset();
    });

  }
  

}

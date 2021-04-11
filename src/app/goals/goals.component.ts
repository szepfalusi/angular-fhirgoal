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

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  constructor(public goalService: GoalService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.goalService.selectedStatusCode == "proposed") {
      alert("dik")
    }

    /*let data = this.goalService.form.value;


    this.goalService.createGoal(data)
    .then(res =>{
      alert("Your order was sent to the coffee shop.");
      this.goalService.form.reset();
    });*/

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Goal } from "../services/goal.model";
import { GoalService } from "../services/goal.service";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  priority = new FormControl();
  lifecycleStatus = new FormControl('',Validators.required);

  /*Only for validation purposes*/
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  constructor(public goalService: GoalService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.goalService.form.value.priority = this.priority.value;
    this.goalService.form.value.lifecycleStatus = this.lifecycleStatus.value;
    let data = this.goalService.form.value;
    console.log(this.lifecycleStatus.value);
    
    if (this.lifecycleStatus.value != '') {
      this.goalService.createGoal(data)
      .then(res =>{
        alert("The goal is documented.");
        this.lifecycleStatus.reset();
        this.goalService.form.reset();
      });
    }else{
      alert("Some input field are not valid")
    }


  }
  

}

import { Component, Input, OnInit } from '@angular/core';
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
  @Input() inputitem: string;

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
    //console.log(this.lifecycleStatus.value);
    console.log('Date start at: '+ this.goalService.form.value.start);
    console.log('Date end at: '+ this.goalService.form.value.end);
    
    
    if (this.lifecycleStatus.value != '' && this.goalService.form.value.end != '' && this.goalService.form.value.start != ''){
      this.goalService.createGoal(data)
      .then(res =>{
        alert("The goal is documented.");
        this.lifecycleStatus.reset();
        this.goalService.form.reset();
        this.lifecycleStatus.setValue('');
      });
    }else{
      console.log(this.lifecycleStatus.value);   
      console.log(this.goalService.form.value.end);
      console.log(this.goalService.form.value.start);   
      alert("Some input field are not valid")
    }


  }

}

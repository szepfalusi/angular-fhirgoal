import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Goal } from "../services/goal.model";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  selectedStatusCode: "proposed";
  selectedPriority: "";
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  constructor() { }

  ngOnInit(): void {
  }

}

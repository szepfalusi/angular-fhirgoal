import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, Query } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Goal } from "./goal.model";
import { map } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  constructor(private afs: AngularFirestore) { }

  goals: Observable<Goal[]>;
  selectedStatusCode: "proposed";
  selectedPriority: "";

  form = new FormGroup({
    patientName: new FormControl(''),
    category: new FormControl(''),
    daterange: new FormControl(''),
    description: new FormControl(''),
  });


  createGoal(data) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('coffeeOrders')
        .add(data)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, Query } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Goal } from "./goal.model";
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goals: Observable<Goal[]>;

  form = new FormGroup({

  });

  constructor(private afs: AngularFirestore) { }


}

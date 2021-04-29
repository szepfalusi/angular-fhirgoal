import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Goal } from "./goal.model";
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { identifierModuleUrl, TransitiveCompileNgModuleMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  constructor(private afs: AngularFirestore) { }

  goals: Observable<Goal[]>;
  goalany: any;
  goaltoEdit: Goal; 


  selectedPriority: "";

  form = new FormGroup({
    patientName: new FormControl(''),
    category: new FormControl(''),
    lifecycleStatus: new FormControl('', Validators.required),
    start: new FormControl(''),
    end: new FormControl(''),
    priority: new FormControl(''),
    description: new FormControl(''),
    note: new FormControl('')
  });


  createGoal(data) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('patientGoals')
        .add(data)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  getGoals(){
    this.goals = this.afs.collection('patientGoals').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data();
        let tempgoal: Goal ={
          lifecycleStatus: data["lifecycleStatus"],
          subject: data["patientName"],
          identifier: [
            {system: a.payload.doc.id, use: "usual", assigner: ""}
          ],
          category: data["category"],
          startDate: new Date(data["start"]?.seconds*1000) as Date,
          target: [
            {dueDate: new Date(data["end"]?.seconds*1000) as Date}
          ],
          description: data["description"],
          note: data["note"],
          priority: data["priority"]
        }; 
        //console.log(tempgoal);
        
        
        return tempgoal as Goal;
      });
    }));
    
    return this.goals;
  }

  updateGoalStatus(data: Goal) {
    /*return
        this.firestore
        .collection("coffeeOrders")
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });*/

    return this.afs.collection('patientGoals').doc(data.identifier[0].system).set({lifecycleStatus: data.lifecycleStatus}, {merge: true});

 }

 deleteGoal(data: Goal){
   return this.afs.collection('patientGoals').doc(data.identifier[0].system).delete();
 }

}

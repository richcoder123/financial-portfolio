import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseGettersService } from './services/firebase-getters.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'financial-portfolio';
  displayedColumns: any;
  dataSource: any[] = [];

  isItemClicked = false;

  public abc: Observable<any>[] | undefined;
  displayedCols: any = [];

  constructor(firebaseGettersService: FirebaseGettersService) { 
    firebaseGettersService.getDocument('savingstreams', 'nscList').subscribe(dataSet => {
      let newArr: any[] = [];
      let nscList = dataSet.data();
      _.forOwn(nscList, (val, key) => {
        newArr.push(val)
      });
      this.dataSource = newArr;
      this.displayedCols = _.keys(this.dataSource[0]);
    });
  }

  ngOnInit() {
  }

  itemClicked() {
    this.isItemClicked = true;
  }

}

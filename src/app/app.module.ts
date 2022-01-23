import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseGettersService } from './services/firebase-getters.service';
import { TableDisplayComponent } from './components/table/table-display.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBM_65aCQtS2TOI7KaJN5LT7dsr4idYPdM",
  authDomain: "fportfolio.firebaseapp.com",
  databaseURL: "https://fportfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fportfolio",
  storageBucket: "fportfolio.appspot.com",
  messagingSenderId: "1041143133928",
  appId: "1:1041143133928:web:114384f7485454b62e3b5d",
  measurementId: "G-281QYW9DCD"
};

@NgModule({
  declarations: [
    AppComponent,
    TableDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  exports: [
    MatTabsModule
  ],
  providers: [
    FirebaseGettersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

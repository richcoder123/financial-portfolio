import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseGettersService {

  constructor(private store: AngularFirestore) { }

  getDocument(collectionName: string, 
    document: string): Observable<any> {
    return this.store.collection(collectionName).doc(document).get();
  }
  
}

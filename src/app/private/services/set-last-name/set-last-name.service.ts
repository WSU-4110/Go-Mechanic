import { Injectable } from '@angular/core';
import { Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SetLastNameService {

  constructor(private firebase: Firestore) { }
}

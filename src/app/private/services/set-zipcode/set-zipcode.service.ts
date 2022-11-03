import { Injectable } from '@angular/core';
import { Firestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SetZipcodeService {

  constructor(private firebase: Firestore) { }
}

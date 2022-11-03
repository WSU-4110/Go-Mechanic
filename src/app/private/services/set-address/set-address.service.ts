import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/compat';
import { AddUserInformationService } from '../user-information-services/add-user-information/add-user-information.service';

@Injectable({
  providedIn: 'root'
})
export class SetAddressService extends AddUserInformationService{

  constructor() 
  {
    super();
  }
}

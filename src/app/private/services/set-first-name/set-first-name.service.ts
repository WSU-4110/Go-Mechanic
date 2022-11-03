import { Injectable } from '@angular/core';
import { Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { userInfo } from '../../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class SetFirstNameService {

  constructor(private firebase: Firestore, private authService: AuthenticationService) { }

  setFirstName(user: userInfo) : Observable<any>
  {

  }
}

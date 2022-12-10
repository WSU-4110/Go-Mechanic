import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc  } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { concatMap, map } from 'rxjs';
import { UsersService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-car-dialog',
  templateUrl: './add-car-dialog.component.html',
  styleUrls: ['./add-car-dialog.component.css']
})

export class AddCarDialogComponent implements OnInit {
  UserVehicleForm = new FormGroup({
    uid: new FormControl('', {
      nonNullable: true,
    }),
    year: new FormControl('',{
      nonNullable: true,
    }),
    make: new FormControl('',{
      nonNullable: true,
    }),
    model: new FormControl('',{
      nonNullable: true,
    }),
    color: new FormControl('',{
      nonNullable: true,
    })
  })


  constructor(
    private toast: HotToastService, 
    private firestone: Firestore,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {}

  get year(){
    return this.UserVehicleForm.get('year');
  }

  get model(){
    return this.UserVehicleForm.get('model');
  }

  get make(){
    return this.UserVehicleForm.get('make');
  }

  get color(){
    return this.UserVehicleForm.get('color');
  }

  submit(){
    const ref = collection(this.firestone, 'users');
    return this.usersService.currentUserProfile$.pipe(
        concatMap((user) => 
        addDoc(ref, {
          users: [user?.uid],
          userVehicles: [
            {
              vehicleYear: user?.vehicleYear ?? '',
              vehicleMake: user?.vehicleMake ?? '',
              vehicleModel: user?.vehicleModel ?? '',
              vehicleColor: user?.vehicleColor ?? '',
            },
          ],
        })
      ),
      map((ref) => ref.id)
    );
  }
}

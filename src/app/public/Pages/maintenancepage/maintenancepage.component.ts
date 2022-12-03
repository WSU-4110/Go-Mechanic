import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import {Address} from "ngx-google-places-autocomplete/objects/address";
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';

@Component({
  selector: 'app-maintenancepage',
  templateUrl: './maintenancepage.component.html',
  styleUrls: ['./maintenancepage.component.css']
})
export class MaintenancepageComponent implements OnInit {
  @ViewChild("placesRef") placesRef : GooglePlaceDirective | undefined;
  options = {
    types: ['postal_code'],
    componentRestrictions: { country: ['us'] }
  } as unknown  as Options;

  
  constructor() { }

  latitude: any;
  longitude: any;
  zoom: any;

  ngOnInit() {
    this.setCurrentLocation();
  }

  public handleAddressChange(address: Address) {
    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
  }

  public setCurrentLocation() {
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      })
    }
    
  }
}

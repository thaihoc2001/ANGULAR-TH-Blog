import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  title = 'google-maps';
  ngOnInit(): void {
    // const loader = new Loader({
    //   apiKey: 'AIzaSyA1CUd61iFAYf3Pn4nTMIhVchWX6V2r4B0'
    // });
    // loader.load().then(() => {
    //   // @ts-ignore
    //   // tslint:disable-next-line:no-unused-expression
    //   new google.maps.Map(document.getElementById('map'), {
    //     center: { lat: 10.798618240242915, lng: 106.67010600067425},
    //     zoom: 15,
    //   });
    // });
  }

}

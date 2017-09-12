import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 ngOnInit() {
   firebase.initializeApp({
     apiKey: "AIzaSyBdlbPnih6Z0SpxAOldaW38iHhe5B7x6v0",
     authDomain: "compras-ab3c3.firebaseapp.com"
   })
 }
}

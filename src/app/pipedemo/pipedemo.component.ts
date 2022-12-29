import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
     todaysDate= new  Date();
     obser;
     price:number=80000;
     obj={
      id:"101",name:"Anil"
     }
     name:string="Maya Anil Shingne";

     value:string="";

  constructor( private _utilityService:UtilityService) {
    

     this.obser= this._utilityService.userName;
   }
     


  ngOnInit() {

  }

}

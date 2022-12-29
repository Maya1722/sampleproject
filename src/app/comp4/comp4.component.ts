import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  userName;
  constructor(private _utilityService:UtilityService) {

    this._utilityService.userName.subscribe(res=>{


      this.userName=res;
 
     })
    }

  ngOnInit() {
  }


  updateUserName(){
     let  sell={
             id:101,
             productName:'Tv'

     }
    this._utilityService.userName.next(JSON.stringify(sell));
  }

}


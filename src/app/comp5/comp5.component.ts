import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {
  userName;
  constructor(private _utilityService:UtilityService) {

    this._utilityService.userName.subscribe(res=>{


      this.userName=res;
 
     })
    }
  ngOnInit() {
  }
  updateUserName(){
  
          let sell={  
            id:102,
            productName:'Mobile'}

    
   this._utilityService.userName.next(JSON.stringify(sell));
 }

}

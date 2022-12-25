import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp3',
  templateUrl: './servicecomp3.component.html',
  styleUrls: ['./servicecomp3.component.css']
})
export class Servicecomp3Component implements OnInit {


  usersData:any=[];
  constructor(private _demoService:DemoService) { 


    this._demoService.getUsersData().subscribe(data=>{


      this.usersData=data;
         console.log(data);
         


    })
  }

  ngOnInit(): void {
    
  }

}



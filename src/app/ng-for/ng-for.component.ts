import { Component, OnInit } from '@angular/core';
import { Student } from '../model/students';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  
  constructor() { }

  title:string="top 3 students";
  students:Student[]=[
 { Name:'smiral', Degree:'Msc',Univercity:'aurangabad',Year:'2022'},
 
 { Name:'renu', Degree:'phd',Univercity:'pune',Year:'2013'},

 {Name:'avyansh', Degree:'B.E',Univercity:'amravati',Year:'2016'},
 

    

  ]



  

  ngOnInit() {
  }

}

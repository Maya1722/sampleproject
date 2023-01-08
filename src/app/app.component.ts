
import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleproject';
  public uid:number; // onChanges hook use
  foods:string[]=[];   //output property

  Users:any=[{

   emp_name:'Sanika',emp_salary:'50000',emp_company:'wipro',emp_address:'pune'
  },
  {
    emp_name:'aditi',emp_salary:'60000',emp_company:'amdocs',emp_address:'mumbai'
  },
  {

    emp_name:'aditya',emp_salary:'35000',emp_company:'Hcl',emp_address:'pune'

  }


  ];
  



  getDataFromChild(value){  //output food event method

    console.log(value);
    this.foods.push(value);
  

  }


  

}
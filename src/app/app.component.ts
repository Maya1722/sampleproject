
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


  Users:any=[{ // input array

     emp_name:"sanika",emp_id:1234, emp_salary:50000 ,emp_company:"wipro"
  },
  {
    emp_name:"maya",emp_id:834, emp_salary:60000 ,emp_company:"info"
  }
  ]



  getDataFromChild(value){  //output food event method

    console.log(value);
    this.foods.push(value);
  

  }


  

}
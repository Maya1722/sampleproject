import { Component, OnInit,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {
  @Input() userid:number; //onChanges input property

  constructor() {
    console.log("hook component constructor called");
    
   }

   ngOnChanges(changes:SimpleChanges):void{
         for (const propname in changes) {
          const prop = changes[propname];
          const { previousValue, currentValue, firstChange} = prop;

          console.log(`prop name ${propname}`);
          console.log(`prev value ${previousValue}`);
         console.log(`current name ${currentValue}`);
         console.log(`first change ${firstChange}`);
         console.log("====================");
         
          
          


          
         }
    
   }

  ngOnInit() {
    console.log(" hook component ngOnInit called");
    
  }

}

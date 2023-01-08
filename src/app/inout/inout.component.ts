import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrls: ['./inout.component.css']
})
export class InoutComponent implements OnInit {
  @Input() employee:any;
  @Output() foodevent:EventEmitter<string>=new EventEmitter<string>(); //output food

  constructor() { }

  ngOnInit() {
    
    console.log("get employee data",this.employee);
    
    
  }
  //function will call user enter s value text box
  addtofood(value){       //food event

  this.foodevent.emit(value);

  }

}

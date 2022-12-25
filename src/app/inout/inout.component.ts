import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrls: ['./inout.component.css']
})
export class InoutComponent implements OnInit {
  @Input() Employee:any;
  @Output() foodevent:EventEmitter<string>=new EventEmitter<string>(); //output food

  constructor() { }

  ngOnInit() {
    console.log("From parent",this.Employee);
    
  }
  addtofood(value){       //food event

    this.foodevent.emit(value);

  }

}

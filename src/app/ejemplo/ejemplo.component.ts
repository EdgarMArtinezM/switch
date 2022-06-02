import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  @Input() set element(el:any){
    this.variable=el;
  };
  variable:boolean=false;
  constructor() {}
  ngOnInit(): void {
    console.log("ElementoInit",this.variable)
  }
}

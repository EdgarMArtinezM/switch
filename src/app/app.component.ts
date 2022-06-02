import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  eje:any;
  ejemplo(){
    console.log(this.eje)
    if(this.eje==true) this.eje=false 
    else this.eje=true
  }
}

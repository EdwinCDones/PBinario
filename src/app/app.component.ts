import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  res: string;
  res2: string;
  res3: string;
  res4: string;
  prueba() {
    this.res = this.num1.toString(2);
    this.res2 = this.num2.toString(2);
    this.res3 = this.num3.toString(2);
    this.res4 = this.num4.toString(2);
  }

}
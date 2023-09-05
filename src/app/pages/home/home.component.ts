import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
[x: string]: any;

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string =""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"

}

import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public _dataService: DataService){}
  cardData = this._dataService.cardData;

  alertOn(name: string){
    alert("The card named as "+ name+" is pressed!");
  }

}

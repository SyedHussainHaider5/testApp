import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() image!: string;
  @Input() text!: string;
  @Input() buttonText!: string;

  @Output() alertMsgEvent = new EventEmitter();

  alertMsg(){
    this.alertMsgEvent.emit(this.buttonText);
  }

}

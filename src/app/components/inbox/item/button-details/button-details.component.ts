import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-details',
  templateUrl: './button-details.component.html',
  styleUrls: ['./button-details.component.css']
})


export class ButtonDetailsComponent {

  constructor() { }

  @Output() buttonDetailsEvent = new EventEmitter();

  activateDetails() {
    this.buttonDetailsEvent.emit();
  }

}

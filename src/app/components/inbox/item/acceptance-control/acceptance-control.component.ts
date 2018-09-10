import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-acceptance-control',
  templateUrl: './acceptance-control.component.html',
  styleUrls: ['./acceptance-control.component.css']
})
export class AcceptanceControlComponent {

  @Output() updateEmployeesListEvent = new EventEmitter();

  private statusApproved: string;
  private statusDenied: string;

  constructor() {
      this.statusApproved = 'Approved';
      this.statusDenied = 'Denied';
   }

  setAcceptance(event){
    this.updateEmployeesListEvent.emit(event);
  }
}

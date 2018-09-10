import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as momentjs from 'moment';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  public employee: Employee;

  @Output() updateEmployeesListEvent = new EventEmitter();

  private isDetailsActive: boolean;
  private vacDays: number;
  private isStatusActive: string;
  private test: boolean;

  constructor() {
    this.isDetailsActive = false;
  }

  ngOnInit() {
      this.vacDays = momentjs(
        this.employee.vacations.finalVacationDate
       ).diff(momentjs(this.employee.vacations.initialVacationDate), 'days');
  }

  updateEmployeesList(event) {
    if (event.target.value === 'Approved') {
      this.test = true;
    }
    this.updateEmployeesListEvent.emit(event);
  }

  activateDetails(e: Event) {
   this.isDetailsActive = !this.isDetailsActive;
  }

  renderClass() {
    if(this.employee.vacations.acceptance === 'Approved') {
      return 'approved';
    }
    else if(this.employee.vacations.acceptance === 'Denied') {
      return 'denied';
    }
    else {
      return '';
    }

  }

}

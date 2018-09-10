import { Component, OnInit, EventEmitter } from '@angular/core';

import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class ListComponent implements OnInit {

  private listEmployees: Employee[];
  constructor(
    private employeesService: EmployeesService
  ) {
    this.listEmployees = [];
  }

    ngOnInit() {
      this.initializeEmployeesList();
    }


    initializeEmployeesList() {
        this.employeesService.getEmployeesList().subscribe(
          (data) => {
            this.listEmployees = data;
          },
          err => {
            console.error(err);
          }, () => {
          }
        );
    }

    updateEmployeesList(idEmployee: number, evenTargetValue: any) {
      this.employeesService.updateEmployeeList(idEmployee, evenTargetValue.target.value).subscribe(
        (data) => {
          this.listEmployees = data;
        },
        err => {
          console.error(err);
        }, () => {
        }
      );
    }


}

import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Employee } from '../models/employee.model';
import { AdapterService } from './adapter.service';
import * as momentjs from 'moment';


@Injectable()
export class EmployeesService {

  private mockDataEmployees: any[];
  private listDataEmployees: Employee[];


  constructor(
    private adapterService: AdapterService
  ) {
    this.generateDummyData();
  }

  getEmployeesList(): Observable<Employee[]> {
    this.listDataEmployees = this.adapterService.adaptEmployees(this.mockDataEmployees);
      return Observable.of(this.listDataEmployees);
  }

  updateEmployeeList(id: number, acceptanceVacations: string): Observable<Employee[]> {
      this.mockDataEmployees[
        (this.mockDataEmployees.findIndex(x => x.id === id))
      ].vacations.acceptance_vacations = acceptanceVacations;
      this.listDataEmployees =  this.adapterService.adaptEmployees(this.mockDataEmployees);
      return Observable.of(this.listDataEmployees);
  }

  generateDummyData() {
    const currentDate = momentjs(new Date()).toDate();
    const MAX_VACATION_DAYS_TO_TAKE = 30;
    const MIN_VACATION_START_DAY = 1;
    const UNCHECKED_VACATIONS_STATUS = 'Unchecked';
    this.mockDataEmployees = [
      {
        id: 1,
        first_name: 'Dario',
        last_name: 'Rodriguez',
        vacations: {
          acceptance_vacations: UNCHECKED_VACATIONS_STATUS,
          initial_date: currentDate,
          final_date: momentjs(new Date()).add(this.generateRandomNumbers(MIN_VACATION_START_DAY, MAX_VACATION_DAYS_TO_TAKE), 'days')
        }
      },
      {
        id: 2,
        first_name: 'Camilo',
        last_name: 'Gutierrez',
        vacations: {
          acceptance_vacations: UNCHECKED_VACATIONS_STATUS,
          initial_date: currentDate,
          final_date: momentjs(new Date()).add(this.generateRandomNumbers(MIN_VACATION_START_DAY, MAX_VACATION_DAYS_TO_TAKE), 'days')
        }
      },
      {
        id: 3,
        first_name: 'Alejandro',
        last_name: 'Martinez',
        vacations: {
          acceptance_vacations: UNCHECKED_VACATIONS_STATUS,
          initial_date: currentDate,
          final_date: momentjs(new Date()).add(this.generateRandomNumbers(MIN_VACATION_START_DAY, MAX_VACATION_DAYS_TO_TAKE), 'days')
        }
      },
      {
        id: 4,
        first_name: 'Jairo',
        last_name: 'Arevalo',
        vacations: {
          acceptance_vacations: UNCHECKED_VACATIONS_STATUS,
          initial_date: currentDate,
          final_date: momentjs(new Date()).add(this.generateRandomNumbers(MIN_VACATION_START_DAY, MAX_VACATION_DAYS_TO_TAKE), 'days')
        }
      }
    ];
  }

  generateRandomNumbers(minRange: number, maxRange: number) {
    return Math.floor(Math.random() * maxRange) + minRange;
  }
}

import { Injectable } from '@angular/core';

import { Employee } from '../models/employee.model';
import { Vacations } from '../models/vacations.model';

@Injectable()
export class AdapterService {

    constructor() {}

    adaptEmployee(raw: Object): Employee {
        const employee = new Employee();
        const vacations = new Vacations();
        employee.firstName = raw['first_name'];
        employee.lastName = raw['last_name'];
        employee.id = raw['id'];
        vacations.acceptance = raw['vacations']['acceptance_vacations'];
        vacations.initialVacationDate = raw['vacations']['initial_date'];
        vacations.finalVacationDate = raw['vacations']['final_date'];
        employee.vacations = vacations;

        return employee;
    }

    adaptEmployees(raw: Object[]): Employee[] {
        return raw.map(element => {
              return this.adaptEmployee(element);
        });
    }
}

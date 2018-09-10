import { Vacations } from './vacations.model';

export class Employee {

    private _firstName: string;
    private _lastName: string;
    private _vacations: Vacations;
    private _id: number;

    constructor() {

        this._firstName = null;
        this._lastName = null;
        this._vacations = null;
        this._id = null;
    }

    public get vacations(): Vacations {
        return this._vacations;
    }

    public set vacations(value: Vacations) {
        this._vacations = value;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

}

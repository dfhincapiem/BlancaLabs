export class Vacations {

    private _initialVacationDate: Date;
    private _finalVacationDate: Date;
    private _acceptance: string;

    constructor() {
        this._initialVacationDate = null;
        this._finalVacationDate = null;
        this._acceptance = null;
    }

    public get acceptance(): string {
        return this._acceptance;
    }

    public set acceptance(value: string) {
        this._acceptance = value;
    }

    public get initialVacationDate(): Date {
        return this._initialVacationDate;
    }

    public set initialVacationDate(value: Date) {
        this._initialVacationDate = value;
    }

    public get finalVacationDate(): Date {
        return this._finalVacationDate;
    }

    public set finalVacationDate(value: Date) {
        this._finalVacationDate = value;
    }

}

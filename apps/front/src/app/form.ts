export class Form<T> {
    private _model: T;
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    validations: Partial<Record<keyof T, string>>;
    isValid: boolean;
    constructor() {
        this.validations = {};
    }
    validate() {
        this.isValid = false;
    }
    clearValiation() {
        this.isValid = true;
    }

}

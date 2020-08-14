import { FormControl, FormGroup } from '@angular/forms';
export class FormParameters<T> {
    submit: Function;
    model: T;
    controls: Partial<Record<keyof T, FormControl>> = {};
}

export class Form<T> {
    public readonly submit : Function;
    public readonly formGroup : FormGroup;
    public readonly controls: Partial<Record<keyof T, FormControl>> = {};

    constructor(formParameters : FormParameters<T>) {
        this.submit = formParameters.submit;
        this.controls = formParameters.controls;
        this.formGroup = new FormGroup( this.controls );
        this.model = formParameters.model;
    }
    get model() : T {
        let _model = {};
        for (let controlKey of Object.keys(this.formGroup.controls)) {
            let control = this.formGroup.controls[controlKey];
            _model[controlKey] = control.value;
        }
        return <T>_model;
    }
    set model(value) {
        for (let key in value) {
            this.formGroup.get(key).setValue( value[key] );
        }
    }
}

import { AbstractControl } from "@angular/forms";

export class EmailValidator {

    static emailMatcher (c: AbstractControl): { [key: string]: boolean } | null {
        let emailControl = c.get('email');
        let confirmControl = c.get('confirmEmail');
    
        if (emailControl?.pristine || confirmControl?.pristine) return null;
        if (emailControl?.value === confirmControl?.value) return null;
    
        return { 'emailMatch': true }
    }
}
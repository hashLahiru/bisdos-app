// angular core
import {Component} from '@angular/core';
// angular forms
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
// angular router
import {Router, RouterLink} from "@angular/router";
// shared forms
import {TextInputComponent} from "../../../shared/forms/text-input/text-input.component";
// shared buttons
import {SubmitButtonComponent} from "../../../shared/buttons/submit-button/submit-button.component";

@Component({
    selector: 'sign-in-page',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TextInputComponent,
        SubmitButtonComponent,
        RouterLink
    ],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.css'
})
export class SignInComponent {

    /** @summary form group for sign in*/
    signInForm!: FormGroup

    constructor(private frmBuilder: FormBuilder,private router:Router) {
        this.initForms()
    }

    /** @summary this method for initialize all the forms in this component*/
    private initForms() {
        this.signInForm = this.frmBuilder.group({
            email: ["", [Validators.required]],
            password: ["", [Validators.required]],
        })
    }

    /** @summary this method for submit login details*/
    submitData() {
        this.signInForm.markAllAsTouched();
        this.router.navigate(["/user/"])
    }
}

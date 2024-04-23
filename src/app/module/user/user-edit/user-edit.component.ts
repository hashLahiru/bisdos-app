// angular core
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TextInputComponent} from "../../../shared/forms/text-input/text-input.component";
import {SubmitButtonComponent} from "../../../shared/buttons/submit-button/submit-button.component";
import {TextAreaInputComponent} from "../../../shared/forms/text-area-input/text-area-input.component";

@Component({
    selector: 'app-user-edit',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TextInputComponent,
        SubmitButtonComponent,
        TextAreaInputComponent
    ],
    templateUrl: './user-edit.component.html',
    styleUrl: './user-edit.component.css'
})
export class UserEditComponent {

    formUserDetails!: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.initForm();
    }

    private initForm() {
        this.formUserDetails = this.formBuilder.group({
            name: ["", [Validators.required]],
            title: ["", [Validators.required]],
            bio: ["", [Validators.required]],
            mobile: ["", [Validators.required]],
            office: ["", [Validators.required]],
            email: ["", [Validators.required]],
            address1: ["", [Validators.required]],
            address2: ["", [Validators.required]],
            address3: ["", [Validators.required]],
            website: ["", [Validators.required]],
            facebook: ["", [Validators.required]],
            twitter: ["", [Validators.required]],
            instagram: ["", [Validators.required]],
            whatsapp: ["", [Validators.required]],
            linkedin: ["", [Validators.required]],
            snapchat: ["", [Validators.required]],
        });
    }

    submitForm(){
        this.formUserDetails.markAllAsTouched();
    }
}

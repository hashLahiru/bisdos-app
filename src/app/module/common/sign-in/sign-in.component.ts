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
import {UserService} from "../../../core/services/user.service";
import {LoginData, LoginRequest} from "../../../core/modals/user.modal";
import {USER_TYPES} from "../../../data/constants/user.constants";

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

    constructor(private frmBuilder: FormBuilder, private router: Router, private userService: UserService) {
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
    submitData(): void {
        this.signInForm.markAllAsTouched();

        if (!this.signInForm.valid) {
            return
        }
        let loginRequest: LoginRequest = {
            userName: this.signInForm.get('email')?.value,
            password: this.signInForm.get('password')?.value,
            userType: USER_TYPES.PROFILE
        }

        console.log(loginRequest)
        this.userService.Login(loginRequest).subscribe({
            next: (res: LoginData): void => {
                this.router.navigate(["/user", res.data]).then();
            },
            error(e): void {
                console.error(e.message)
            }
        })
    }
}

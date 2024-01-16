// angular core
import {Component, Input, Self} from '@angular/core';
// angular forms
import {ControlValueAccessor, NgControl, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'shared-text-input',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './text-input.component.html',
    styleUrl: './text-input.component.css'
})
export class TextInputComponent implements ControlValueAccessor {

    // for set input box type
    @Input() type: string = "text"
    // for set input box label text
    @Input() label: string = "text"
    // for hid input box label text
    @Input() isLabelHidden: boolean = false
    // for input box placeholder text
    @Input() placeholder: string = "Enter text"

    visiblePassword: boolean = false

    constructor(@Self() public ngControl: NgControl) {
        this.ngControl.valueAccessor = this
    }

    writeValue(obj: any) {
    }

    registerOnChange(fn: any) {
    }

    registerOnTouched(fn: any) {

    }

    setDisabledState(isDisabled: boolean) {
    }
}

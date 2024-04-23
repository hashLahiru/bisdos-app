import {Component, Input, Self} from '@angular/core';
import {ControlValueAccessor, NgControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'shared-text-area-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './text-area-input.component.html',
  styleUrl: './text-area-input.component.css'
})
export class TextAreaInputComponent implements ControlValueAccessor {

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

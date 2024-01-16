//  angular core
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'shared-submit-button',
    standalone: true,
    imports: [],
    templateUrl: './submit-button.component.html',
    styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {

    // for button text
    @Input() buttonText: string = "Submit"
    // for custom styles to button
    @Input() customCSSClasses: string = ""
    // for return button click event
    @Output() onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>()
}

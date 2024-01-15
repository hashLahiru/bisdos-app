// angular core
import {Component} from '@angular/core';
// angular common
import {CommonModule} from '@angular/common';
// angular router
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
}

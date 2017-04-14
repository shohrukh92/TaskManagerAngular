import {Component} from '@angular/core';
import '../assets/css/app.css';

@Component({
    selector: 'app',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
})

export class AppComponent {
    appTitle: string = 'Task Manager';
}

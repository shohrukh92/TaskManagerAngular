import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})

export class AppComponent {
    appTitle: string;

    constructor() {
        this.appTitle = 'Task Manager';
    }
}

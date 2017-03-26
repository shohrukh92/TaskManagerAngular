import { Component, Input } from '@angular/core';

@Component({
    selector: 'lists-table',
    templateUrl: './lists-table.component.html'
})

export class ListsTableComponent {
    @Input() taskLists = [];
}
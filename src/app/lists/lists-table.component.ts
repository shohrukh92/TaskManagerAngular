import { Component, Input } from '@angular/core';
import { List } from './lists.component';

@Component({
    selector: 'lists-table',
    templateUrl: './lists-table.component.html'
})

export class ListsTableComponent {
    @Input() taskLists:List[] = [];
}
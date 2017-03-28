import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';

@Component({
    selector: 'lists-table',
    templateUrl: './lists-table.component.html'
})

export class ListsTableComponent {
    @Input() taskLists: List[] = [];
    @Output() deleteListEvent = new EventEmitter<List>();

    constructor(private _listsApi: ListsApi) {}

    deleteList(list: List) {
        this.deleteListEvent.emit(list);        
    }
}
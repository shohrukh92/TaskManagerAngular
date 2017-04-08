import { Component, Input } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';

@Component({
    selector: 'lists-table',
    templateUrl: './lists-table.component.html'
})

export class ListsTableComponent {
    @Input() taskLists: List[];
    
    constructor(private _listsApi: ListsApi) {
        this.taskLists = [];
    }

    deleteList(list: List) {
        this._listsApi.deleteList(list._id).subscribe();
    }
}
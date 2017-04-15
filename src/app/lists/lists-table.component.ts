import { Component, Input } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';

@Component({
    selector: 'lists-table',
    templateUrl: './lists-table.component.html'
})

export class ListsTableComponent {
    private _lists: List[];
    @Input()
    set lists(lists: List[]) {
        this._lists = lists;
    }
    get lists(): List[] {
        return this._lists;
    }

    rowHighlightColor: string;

    constructor(private _listsApi: ListsApi) {
        this._lists = []; //set default value for lists array
        this.rowHighlightColor = '#d2f3c7'; //color for highlighting table rows (for directive)
    }

    deleteList(list: List) {
        this._listsApi.deleteList(list._id).subscribe();
    }
}
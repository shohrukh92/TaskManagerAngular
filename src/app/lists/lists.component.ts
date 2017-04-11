import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';
import { Store } from '../store';

@Component({
    selector: 'lists',
    providers: [ListsApi],
    styleUrls: ['./lists.component.css'],
    templateUrl: './lists.component.html'
})

export class ListsComponent implements OnInit, OnDestroy {
    lists: List[];
    listEditMode: boolean;

    constructor(
        private _listsApi: ListsApi,
        private _store: Store
    ) {
        this.lists = [];
        this.listEditMode = false;
    }

    ngOnInit() {
        console.log('List component has been initialized');

        this._listsApi.getLists()
            .subscribe();

        this._store.changes
            .map(data => data.lists)
            .subscribe(
                (lists: List[]) => {
                    this.lists = lists;
                },
                (error) => { 
                    console.log("Error happenedd " + error);
                }
            );
    }

    ngOnDestroy() {
        console.log('List component has been destroyed');
    }
}

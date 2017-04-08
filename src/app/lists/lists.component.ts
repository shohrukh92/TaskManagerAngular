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
  taskLists: List[];
  listEditMode: boolean;

  constructor(
    private _listsApi: ListsApi,
    private _store: Store
  ) {
    this.taskLists = [];
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
        //TODO: use interface instead of List and Task class ?
        this.taskLists = lists; // lists.map(listObject => new List(listObject));
      },
      (error) => { 
        console.log("Error happenedd " + error);
      }
    );
  }

  onCreateList(newList) {
    this._listsApi.createList(newList)
    .subscribe();
  }

  onDeleteList(removedList) {
    this._listsApi.deleteList(removedList._id)
    .subscribe();
  }

  ngOnDestroy() {
    console.log('List component has been destroyed');
  }
}

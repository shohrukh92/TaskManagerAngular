import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';

@Component({
  selector: 'lists',
  providers: [ListsApi],
  styleUrls: ['./lists.component.css'],
  templateUrl: './lists.component.html'
})

export class ListsComponent implements OnInit, OnDestroy {
  taskLists: List[] = [];
  listEditMode: boolean = false;

  constructor(private _listsApi: ListsApi) { }

  ngOnInit() {
    console.log('List component has been initialized');

    this._listsApi.getLists()
    .subscribe(
        (response) => { 
          this.taskLists = response.map(listObject => new List(listObject));
        },
        (error) => { 
          console.log("Error happenedd " + error);
        }
    );
  }

  onCreateList(newList) {
    this._listsApi.createList(newList)
    .subscribe(
      (response) => { 
        this.taskLists.push(new List(response.insertedList)); 
      },
      (error) => { 
        console.log("Error happened " + error); 
      }
    );
  }

  onDeleteList(removedList) {
    this._listsApi.deleteList(removedList._id)
      .subscribe(
          (response) => { 
            let removedListIndex = this.taskLists.findIndex((currentList) => {
              return currentList._id == removedList._id;
            });
            this.taskLists.splice(removedListIndex, 1);
          },
          (error) => { 
            console.log("Error happened " + error); 
          }
      );
  }

  ngOnDestroy() {
    console.log('List component has been destroyed');
  }
}

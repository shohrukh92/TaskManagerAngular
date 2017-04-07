import { Component, OnInit } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';

@Component({
    selector: 'lists',
    providers: [ListsApi],
    styleUrls: ['./lists.component.css'],
    templateUrl: './lists.component.html'
})

export class ListsComponent implements OnInit {
    taskLists: List[] = [];
    listEditMode: boolean = false;

    constructor(private _listsApi: ListsApi) { }

    toListClass(listObject) {
        return new List(listObject.title, listObject.description, listObject._id);
    }

    ngOnInit() {
        this._listsApi.getLists()
        .subscribe(
            (response) => { 
                this.taskLists = response.map(this.toListClass);
            },
            (error) => { 
                console.log("Error happenedd " + error);
            }
        );
    }

    onCreateList(newList: List) {
        this._listsApi.createList(newList)
        .subscribe(
            (response) => { 
                this.taskLists.push(this.toListClass(response.insertedList)); 
            },
            (error) => { 
                console.log("Error happened " + error); 
            }
        );
    }

    onDeleteList(removedList: List) {
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
    
    
}

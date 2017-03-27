import { Component, OnInit } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';

@Component({
  selector: 'lists',
  styleUrls: ['./lists.component.css'],
  templateUrl: './lists.component.html'
})

export class ListsComponent implements OnInit {
  taskLists: List[] = [];
  listEditMode: boolean = false;

  constructor(private _listsApi: ListsApi) { }

  ngOnInit() {
    console.log('onInit');
    this._listsApi.getLists()
    .subscribe(
        (response) => { 
          this.taskLists = response;
        },
        (error) => { 
          console.log("Error happenedd " + error);
        }
    );
  }

  onCreateList(newList: List) {
    console.log(newList.convertToUrlParams());
    
    this._listsApi.createList(newList)
      .subscribe(
          (response) => {
              console.log(response);
              this.taskLists.push(newList);
          },
          (error) => { 
              console.log("Error happened " + error);
          }
      );
  }
}

import { Component } from '@angular/core';
import { ListsApi } from '../services';

export class List {
  title: string;
  description: string;
}

@Component({
  selector: 'lists',
  styleUrls: ['./lists.component.css'],
  templateUrl: './lists.component.html'
})

export class ListsComponent {
  taskLists: List[] = []

  constructor(private _listsApi: ListsApi) {
    this._listsApi.getLists()
    .subscribe(
        (response) => { 
          this.taskLists = response;
          console.log(this.taskLists)
        },
        (error) => { console.log("Error happenedd " + error) },
        () => { console.log("the subscription is completed ") }
    );
  }

}

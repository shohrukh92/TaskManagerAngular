import {Component} from '@angular/core';

@Component({
  selector: 'lists',
  styleUrls: ['./lists.component.css'],
  templateUrl: './lists.component.html'
})

export class ListsComponent {
  taskLists = [
    {
      title: "List 1",
      description: "List 1 description"
    },
    {
      title: "List 2",
      description: "List 2 description"
    },
    {
      title: "List 3",
      description: "List 3 description"
    }
  ]
}

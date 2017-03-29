import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  allTasks = [
    {title: "Task title 1", isCompleted: false, listId: "123"},
    {title: "Task title 2", isCompleted: true, listId: "123"},
    {title: "Task title 3", isCompleted: false, listId: "123"},
    {title: "Task title 4", isCompleted: true, listId: "123"}
  ]
  constructor() {

  }
}

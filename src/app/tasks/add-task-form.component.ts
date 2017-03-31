import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../lists';
import { Task } from './task';

@Component({
  selector: 'add-task-form',
  templateUrl: './add-task-form.component.html'
})

export class AddTaskFormComponent {
  @Input() taskEditMode = false;
  @Input() allLists: List[] = [];

  newTask: Task = new Task({});

  constructor() {}
  
  addNewTask () {

  }
}
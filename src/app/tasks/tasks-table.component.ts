import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Task } from './task';

@Component({
  selector: 'tasks-table',
  templateUrl: './tasks-table.component.html'
})

export class TasksTableComponent {
  @Input() allTasks = [];
  @Output() updateTaskStatusEvent = new EventEmitter<Task>();

  constructor() {}

  updateTaskStatus(task: Task) {
    task.isCompleted = !task.isCompleted;
    this.updateTaskStatusEvent.emit(task);
  }
}
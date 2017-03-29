import { Component, Input } from '@angular/core'

@Component({
  selector: 'tasks-table',
  templateUrl: './tasks-table.component.html'
})

export class TasksTableComponent {
  @Input() allTasks = [];

  constructor() {}
}
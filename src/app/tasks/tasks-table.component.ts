import { Component, Input, Output, EventEmitter } from '@angular/core'
import { List } from '../lists';
import { Task } from './task';

@Component({
    selector: 'tasks-table',
    templateUrl: './tasks-table.component.html'
})

export class TasksTableComponent {
    @Input() allTasks:Task[] = [];
    @Input() allLists:List[] = [];
    @Output() updateTaskStatusEvent = new EventEmitter<Task>();
    @Output() deleteTaskEvent = new EventEmitter<Task>();

    constructor() {}

    updateTaskStatus(task: Task) {
        task.isCompleted = !task.isCompleted;
        this.updateTaskStatusEvent.emit(task);
    }

    getListTitle(listId: string) {
        let list = this.allLists.find(list => list._id == listId);
        return list.title;
    }

    deleteTask(task: Task) {
        this.deleteTaskEvent.emit(task);
    }
}
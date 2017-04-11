import { Component, Input, Output, EventEmitter } from '@angular/core'
import { TasksApi } from '../services';
import { List } from '../lists';
import { Task } from './task';

@Component({
    selector: 'tasks-table',
    templateUrl: './tasks-table.component.html'
})

export class TasksTableComponent {
    @Input() tasks: Task[];
    @Input() lists: List[];
    
    constructor(private _tasksApi: TasksApi) {
        this.tasks = [];
        this.lists = [];
    }

    updateTaskStatus(task: Task) {
        task.isCompleted = !task.isCompleted;
        this._tasksApi.updateTask(task).subscribe();
    }

    getListTitle(listId: string) {        
        /*let list = this.lists.find(list => list._id === listId);
        return list.title;*/
        return 'listId';
    }

    deleteTask(task: Task) {
        this._tasksApi.deleteTask(task._id).subscribe();
    }
}
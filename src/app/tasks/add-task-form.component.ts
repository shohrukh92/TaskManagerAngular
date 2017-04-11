import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TasksApi } from '../services';
import { List } from '../lists';
import { Task } from './task';
    
@Component({    
    selector: 'add-task-form',    
    templateUrl: './add-task-form.component.html'    
})    
    
export class AddTaskFormComponent {    
    @Input() taskEditMode;
    @Input() lists: List[];

    newTask: Task;
    
    constructor(private _tasksApi: TasksApi) {
        this.newTask = new Task();
        this.taskEditMode = false;
        this.lists = [];        
    }    
        
    addNewTask () {    
        //App states changes Changes automatically (rxjs)
        this._tasksApi.createTask(this.newTask).subscribe();
        this._resetForm();
    }

    private _resetForm() {
        this.newTask = new Task();
    }
}
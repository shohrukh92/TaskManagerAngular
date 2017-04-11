import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreHelper } from './store-helper';
import { Observable } from 'rxjs/Observable';
import { Task } from '../tasks';
import 'rxjs/Rx';
    
@Injectable()    
export class TasksApi {
    path: string;

    constructor(
        private _apiService: ApiService,
        private _storeHelper: StoreHelper
    ) {
        this.path = '/tasks';
    }
    
    createTask(task: Task) {
        return this._apiService.post(this.path, task)
            .do(createTaskResponse => this._storeHelper.add('tasks', createTaskResponse.insertedTask));
    }
    
    updateTask(task: Task) {
        return this._apiService.put(this.path, task)
            .do(updatedTastResponse => this._storeHelper.findAndUpdate('tasks', updatedTastResponse.updatedTask));
    }
    
    getTasks(): Observable<Task[]> {
        return this._apiService.get(this.path)
            .do(allTasks => this._storeHelper.update('tasks', allTasks));
    }
    
    deleteTask(taskId: string) {
        return this._apiService.delete(`${this.path}/${taskId}`)
            .do(removedTask => this._storeHelper.findAndDelete('tasks', taskId));
    }
}

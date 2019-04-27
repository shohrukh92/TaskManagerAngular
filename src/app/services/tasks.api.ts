import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreHelper } from './store-helper';
import { Task } from '../tasks';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
            .pipe(
              tap(createTaskResponse => this._storeHelper.add('tasks', createTaskResponse.insertedTask))
            );
    }

    updateTask(task: Task) {
        return this._apiService.put(this.path, task)
            .pipe(
              tap(updatedTastResponse => this._storeHelper.findAndUpdate('tasks', updatedTastResponse.updatedTask))
            );
    }

    getTasks(): Observable<Task[]> {
        return this._apiService.getTasks()
            .pipe(
              tap(allTasks => this._storeHelper.update('tasks', allTasks))
            );
    }

    deleteTask(taskId: string) {
        return this._apiService.delete(`${this.path}/${taskId}`)
            .pipe(
              tap(removedTask => this._storeHelper.findAndDelete('tasks', taskId))
            );
    }
}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Task } from '../tasks';
import 'rxjs/Rx';

@Injectable()
export class TasksApi {
  path: string = '/tasks';
  constructor(private _apiService: ApiService) {}

  createTask(task: Task) {
    return this._apiService.post(this.path, task.convertToUrlParams());
  }

  updateTask(task: Task) {
    return this._apiService.put(this.path, task);
  }

  getTasks(): Observable<Task[]> {
    return this._apiService.get(this.path);
  }

  deleteTask(taskId: string) {
    return this._apiService.delete(`${this.path}/${taskId}`);
  }
}

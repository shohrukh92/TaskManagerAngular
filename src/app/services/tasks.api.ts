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

  getTasks(): Observable<Task[]> {
    return this._apiService.get(this.path);
  }

  deleteTask(task: Task) {
    return this._apiService.delete(`${this.path}/delete`, task.convertToUrlParams());
  }
}

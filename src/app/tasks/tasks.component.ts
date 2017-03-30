import { Component } from '@angular/core';
import { TasksApi } from '../services';
import { Task } from './task';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  allTasks: Task[] = [];
  
  constructor(private _tasksApi: TasksApi) {

  }

  private _toTaskClass(taskObject) {
    return new Task();
  }

  ngOnInit() {
    this._tasksApi.getTasks()
    .subscribe(
        (response) => { 
          console.log(response);
          //this.allTasks = response.map(this._toTaskClass);
          this.allTasks = response;
        },
        (error) => { 
          console.log("Error happenedd " + error);
        }
    );
  }
}

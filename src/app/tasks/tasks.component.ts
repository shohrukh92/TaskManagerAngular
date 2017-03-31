import { Component } from '@angular/core';
import { TasksApi } from '../services';
import { Task } from './task';

@Component({
  selector: 'tasks',
  providers: [TasksApi],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  allTasks: Task[] = [];
  
  constructor(private _tasksApi: TasksApi) { }

  ngOnInit() {
    this._tasksApi.getTasks()
    .subscribe(
        (response) => { 
          this.allTasks = response.map(taskObject => new Task(taskObject));
        },
        (error) => { 
          console.log("Error happenedd " + error);
        }
    );
  }

  onUpdateTaskStatus(task: Task) {
    this._tasksApi.updateTask(task)
    .subscribe(
        (response) => { 
          console.log(`Task ${task.title} was updated`);          
        },
        (error) => { 
          console.log("Error happenedd " + error);
        }
    );
  }
}

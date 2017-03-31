import { Component } from '@angular/core';
import { TasksApi } from '../services';
import { ListsApi } from '../services';
import { List } from '../lists';
import { Task } from './task';

@Component({
  selector: 'tasks',
  providers: [TasksApi, ListsApi],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  allLists: List[] = [];
  allTasks: Task[] = [];
  taskEditMode: boolean = false;
  
  constructor(private _tasksApi: TasksApi, private _listsApi: ListsApi) { }

  ngOnInit() {
    this._listsApi.getListsWithTasks()
    .subscribe(
        (response) => { 
          console.log(response);
          response.forEach(listObject => {
            let {list, tasks} = listObject;
            this.allLists.push(new List(list.title, list.description));
            tasks.forEach(taskObject => {
              this.allTasks.push(new Task(taskObject));
            });
          })
        },
        (error) => { 
          console.log("Error happenedd " + error);
        }
    );

    /*this._tasksApi.getTasks()
    .subscribe(
        (response) => { 
          this.allTasks = response.map(taskObject => new Task(taskObject));
        },
        (error) => { 
          console.log("Error happenedd " + error);
        }
    );*/
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

  onCreateTask(newTask: Task) {

  }
}

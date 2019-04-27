import { Component, OnInit } from '@angular/core';
import { ListsApi } from '../services';
import { TasksApi } from '../services';
import { Store } from '../store';
import { List } from '../lists';
import { Task } from './task';
import { map } from 'rxjs/operators';

@Component({
    selector: 'tasks',
    providers: [TasksApi, ListsApi],
    styleUrls: ['./tasks.component.css'],
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
    tasks: Task[];
    lists: List[];
    taskEditMode: boolean = false;

    constructor(
        private _tasksApi: TasksApi,
        private _listsApi: ListsApi,
        private _store: Store
    ) {
        this.tasks = [];
        this.lists = [];
    }

    ngOnInit() {
        console.log('Task component has been initialized');

        this._tasksApi.getTasks()
            .subscribe();

        this._store.changes
            .pipe(map(data => data.tasks))
            .subscribe(
                (tasks: Task[]) => {
                    this.tasks = tasks;
                },
                (error) => {
                    console.log("Error happenedd " + error);
                }
            );

        //TODO: move the logic of getting lists and tasks to main app.component
        this._listsApi.getLists()
            .subscribe();

        this._store.changes
            .pipe(map(data => data.lists))
            .subscribe(
                (lists: List[]) => {
                    this.lists = lists;
                },
                (error) => {
                    console.log("Error happenedd " + error);
                }
            );
    }
}

import { List } from './../lists/list';
import { Task } from './../tasks/task';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tasks } from './tasks-data';
import { lists } from './lists-data';

@Injectable()
export class ApiService {
    getTasks(): Observable<Task[]> {
        return of(tasks);
    }

    getLists(): Observable<List[]> {
        return of(lists);
    }

    post(path: string, body): Observable<any> {
        return of({});
    }

    put(path: string, body): Observable<any> {
        return of({});
    }

    delete(path: string): Observable<any> {
        return of({});
    }
}

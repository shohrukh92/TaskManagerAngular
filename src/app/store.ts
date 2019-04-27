import { Injectable } from '@angular/core';
import { List } from './lists';
import { Task } from './tasks';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export interface State {
    lists: List[];
    tasks: Task[];
}

const defaultState: State = {
    lists: [],
    tasks: []
};

const appStore = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
    private store = appStore;

    changes = this.store.asObservable().pipe(
        distinctUntilChanged()
    );

    setState(state: State) {
        this.store.next(state);
    }

    getState(): State {
        return this.store.value;
    }

    purge() {
        this.store.next(defaultState);
    }
}

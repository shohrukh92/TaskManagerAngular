import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { List } from './lists';
import { Task } from './tasks';
import 'rxjs/Rx';

export interface State {
    lists: List[]
    tasks: Task[]
}

const defaultState: State = {
    lists: [],
    tasks: []
}

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
    private store = _store;

    changes = this.store.asObservable()
        .distinctUntilChanged();
    
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

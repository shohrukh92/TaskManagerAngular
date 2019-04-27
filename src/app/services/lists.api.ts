import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreHelper } from './store-helper';
import { List } from '../lists';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ListsApi {
    path: string;

    constructor(
        private _apiService: ApiService,
        private _storeHelper: StoreHelper
    ) {
        this.path = '/lists';
    }

    createList(list: List) {
        return this._apiService.post(this.path, list)
            .pipe(
              tap(createListResponse => this._storeHelper.add('lists', createListResponse.insertedList))
            );
    }

    getLists(): Observable<any[]> {
        return this._apiService.getLists()
            .pipe(
              tap(allLists => this._storeHelper.update('lists', allLists))
            );
    }

    deleteList(listId: string) {
        return this._apiService.delete(`${this.path}/${listId}`)
            .pipe(
              tap(removedList => this._storeHelper.findAndDelete('lists', listId))
            );
    }
}

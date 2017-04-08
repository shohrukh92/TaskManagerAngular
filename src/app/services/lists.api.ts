import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreHelper } from './store-helper';
import { Observable } from 'rxjs/Observable';
import { List } from '../lists';
import 'rxjs/Rx';
    
@Injectable()    
export class ListsApi {    
    path: string;

    constructor(
        private _apiService: ApiService,
        private _storeHelper: StoreHelper
    ) {
         this.path = '/lists'
    }
    
    createList(list: List) {    
        return this._apiService.post(this.path, list.convertToUrlParams())
            .do(savedList => this._storeHelper.add('lists', savedList));
    }
    
    getLists(): Observable<any[]> {    
        return this._apiService.get(this.path)
            .do(allLists => this._storeHelper.update('lists', allLists));
    }
    
    getListsWithTasks(): Observable<any[]> {    
        return this._apiService.get(`${this.path}/tasks`);
    }
    
    deleteList(listId: string) {    
        return this._apiService.delete(`${this.path}/${listId}`)
            .do(removedList => this._storeHelper.findAndDelete('lists', removedList._id))
    }
}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { List } from '../lists';
import 'rxjs/Rx';

@Injectable()
export class ListsApi {
  path: string = '/lists';
  constructor(private _apiService: ApiService) {}

  createList(list: List) {
    return this._apiService.post(this.path, list.convertToUrlParams());
  }

  getLists(): Observable<any[]> {
    return this._apiService.get(this.path);
  }

  deleteList(listId: string) {
    return this._apiService.delete(`${this.path}/${listId}`);
  }
}

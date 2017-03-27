import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { List } from '../lists';
import 'rxjs/Rx';

@Injectable()
export class ListsApi {
  path: string = '/lists';
  constructor(private apiService: ApiService) {}

  createList(list) {
    return this.apiService.post(this.path, list)
  }

  getLists(): Observable<List[]> {
    return this.apiService.get(this.path)
  }

  completeList(list) {
    return this.apiService.delete(`${this.path}/${list.id}`)
  }
}

import { URLSearchParams } from '@angular/http';
import { List } from '../lists';

export class Task {
  title: string;
  isCompleted: boolean;
  _id: string;
  parentList: List;

  constructor() {

  }

  convertToUrlParams() {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('title', this.title);
    urlSearchParams.append('isCompleted', String(this.isCompleted));
    urlSearchParams.append('_id', this._id);
    urlSearchParams.append('listId', this.parentList._id);
    return urlSearchParams.toString();
  }
}
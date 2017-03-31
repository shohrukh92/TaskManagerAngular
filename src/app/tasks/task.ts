import { URLSearchParams } from '@angular/http';
import { List } from '../lists';

export class Task {
  title: string;
  isCompleted: boolean;
  _id: string;
  listId: string;
  listTitle: string;

  constructor(taskObject) {
    [ 
      this.title, this.isCompleted, this._id, 
      this.listId, this.listTitle 
    ] = [
      taskObject.title, taskObject.isCompleted, taskObject._id,
      taskObject.listId, taskObject.listTitle
    ];
  }

  convertToUrlParams() {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('title', this.title);
    urlSearchParams.append('isCompleted', String(this.isCompleted));
    urlSearchParams.append('_id', this._id);
    return urlSearchParams.toString();
  }
}
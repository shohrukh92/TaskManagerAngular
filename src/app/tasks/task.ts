import { URLSearchParams } from '@angular/http';
import { List } from '../lists';

export class Task {
  title: string;
  isCompleted: boolean;
  _id: string;
  listId: string;
  listTitle: string;

  /*constructor(newTitle: string = "", newIsCompleted: string = "", ) {
    forE
    { this.title, this.isCompleted, this._id, this.listId, this.listTitle } = taskObject;
  }*/

  convertToUrlParams() {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('title', this.title);
    urlSearchParams.append('isCompleted', String(this.isCompleted));
    urlSearchParams.append('_id', this._id);
    urlSearchParams.append('listId', this.listId);
    return urlSearchParams.toString();
  }
}
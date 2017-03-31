import { URLSearchParams } from '@angular/http';
import { List } from '../lists';

export class Task {
  title: string;
  isCompleted: boolean;
  _id: string;

  listId: string;
  listTitle: string;

  //TODO: refactoring for both Task and List class... ()
  constructor(taskObject) {    
    [ 
      this.title, this.isCompleted, this._id, 
      this.listId, this.listTitle 
    ] = [
      taskObject.title || "", taskObject.isCompleted || false, taskObject._id || "",
      taskObject.listId || "", taskObject.listTitle || ""
    ];
  }

  convertToUrlParams() {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('title', this.title);
    urlSearchParams.append('isCompleted', String(this.isCompleted));
    return urlSearchParams.toString();
  }
}
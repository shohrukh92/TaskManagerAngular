import { URLSearchParams } from '@angular/http';

export class List {
  title: string;
  description: string;
  _id: string;

  constructor(newTitle: string = "", newDescription: string = "", newId: string = "") {
    this.title = newTitle;
    this.description = newDescription;
    this._id = newId;
  }

  isValidList() {
    return !(this.title.trim() == "");
  }
  
  clear() {
    this.title = this.description = this._id = "";
  }  

  convertToUrlParams() {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('title', this.title);
    urlSearchParams.append('description', this.description);
    urlSearchParams.append('_id', this._id);
    return urlSearchParams.toString();
  }
}
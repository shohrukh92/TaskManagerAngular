import { URLSearchParams } from '@angular/http';

export class List {
  title: string;
  description: string;
  _id: string;

  constructor(title: string = "", description: string = "", _id: string = "") {
    this.title = title;
    this.description = description;
    this._id = _id;
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
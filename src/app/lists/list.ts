import { URLSearchParams } from '@angular/http';

export class List {
  title: string;
  description: string;
  _id: string;

  //TODO: replace with object param
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
    return urlSearchParams.toString();
  }
}
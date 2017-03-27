import { URLSearchParams } from '@angular/http';

export class List {
  title: string;
  description: string;

  constructor(newTitle: string = "", newDescription: string = "") {
    this.title = newTitle;
    this.description = newDescription;
  }

  isValidList() {
    return !(this.title.trim() == "");
  }
  
  clear() {
    this.title = this.description = "";
  }  

  convertToUrlParams() {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('title', this.title);
    urlSearchParams.append('description', this.description);
    return urlSearchParams.toString();
  }
}
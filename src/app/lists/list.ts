import { URLSearchParams } from '@angular/http';

export class List {
    title: string;
    description: string;
    _id: string;

    constructor(listObject: any = {}) {
        [
            this.title, this.description, this._id
        ] = [
            listObject.title || "", listObject.description || "", listObject._id || ""
        ];
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
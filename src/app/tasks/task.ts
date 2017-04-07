import { URLSearchParams } from '@angular/http';    
    
export class Task {    
    title: string;    
    isCompleted: boolean;    
    _id: string;    
    listId: string;    
    
    constructor(taskObject) {            
        [    
            this.title, this.isCompleted,    
            this._id, this.listId    
        ] = [    
            taskObject.title || "", taskObject.isCompleted || false,    
            taskObject._id || "", taskObject.listId || ""    
        ];    
    }    
    
    isValidTask() {    
        return this.title.trim() != "" && this.listId != "";    
    }    
    
    clear() {    
        this.title = this._id = this.listId = "";
        this.isCompleted = false;    
    }    
    
    convertToUrlParams() {    
        let urlSearchParams = new URLSearchParams();    
        urlSearchParams.append('title', this.title);    
        urlSearchParams.append('isCompleted', String(this.isCompleted));    
        urlSearchParams.append('listId', this.listId);    
        return urlSearchParams.toString();    
    }    
}
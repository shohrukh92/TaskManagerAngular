import { URLSearchParams } from '@angular/http';    
import { List } from '../lists';    
    
export class Task {    
    title: string;    
    isCompleted: boolean;    
    _id: string;    
    listId: string;    
    
    //TODO: refactoring for both Task and List class... ()    
    //TODO: isCompleted "true/false" convertation to bool    
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
    }    
    
    convertToUrlParams() {    
        let urlSearchParams = new URLSearchParams();    
        urlSearchParams.append('title', this.title);    
        urlSearchParams.append('isCompleted', String(this.isCompleted));    
        urlSearchParams.append('listId', this.listId);    
        return urlSearchParams.toString();    
    }    
}
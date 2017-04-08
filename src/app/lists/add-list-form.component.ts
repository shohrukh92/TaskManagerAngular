import { Component, Input } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';
import { InputColorDirective } from '../directives';

@Component({
    selector: 'add-list-form',
    templateUrl: './add-list-form.component.html'
})

export class AddListFormComponent {
    @Input() listEditMode;
    newList: List;
    
    constructor(private _listsApi: ListsApi) {
         this.listEditMode = false;
         this.newList = new List();
    }

    addNewList() {
        //App states changes Changes automatically (rxjs)
        this._listsApi.createList(this.newList).subscribe();
    }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';
import { InputColorDirective } from '../directives';

@Component({
    selector: 'add-list-form',
    templateUrl: './add-list-form.component.html'
})

export class AddListFormComponent {
    @Input() listEditMode = false;
    @Output() createListEvent = new EventEmitter<List>();

    newList: List = new List();
    
    constructor(private _listsApi: ListsApi) {}

    addNewList() {
        this.createListEvent.emit(this.newList);        
        this.newList.clear();
    }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListsApi } from '../services';
import { List } from './list';

@Component({
    selector: 'add-list-form',
    template: `
        <form class="form-inline">
            <div class="form-group">
                <label>Title</label>
                <input 
                    [(ngModel)]="newList.title" 
                    name="newListTitle"
                    type="text" class="form-control" placeholder="My list"
                >
            </div>
            <div class="form-group">
                <label>Description</label>
                <input 
                    [(ngModel)]="newList.description"
                    name="newListDescription"
                    type="text" class="form-control" placeholder="List description">
            </div>
            <button (click)="addNewList()" type="submit" class="btn btn-success">Add</button>
            <button *ngIf="listEditMode" type="submit" class="btn btn-info">Save</button>
        </form>
    `
})

export class AddListFormComponent {
    @Input() listEditMode = false;
    @Output() createListEvent = new EventEmitter<List>();

    newList: List = new List();
    
    constructor(private _listsApi: ListsApi) {}

    addNewList() {
        if (this.newList.isValidList()) {
            this.createListEvent.emit(new List(this.newList.title, this.newList.description));
        }
        else {
            console.log("empty list (at least title should not be empty)");
        }
        this.newList.clear();
    }
}
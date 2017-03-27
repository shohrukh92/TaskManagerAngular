import { Component } from '@angular/core';

@Component({
    selector: 'add-list-form',
    template: `
        <form class="form-inline">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" placeholder="My list">
            </div>
            <div class="form-group">
                <label>Description</label>
                <input type="text" class="form-control" placeholder="List description">
            </div>
            <button type="submit" class="btn btn-success">Add</button>
        </form>
    `
})

export class AddListFormComponent {}
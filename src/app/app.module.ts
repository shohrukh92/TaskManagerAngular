import { NgModule } from '@angular/core'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ListsComponent, ListsTableComponent, AddListFormComponent } from './lists';
import { TasksComponent, TasksTableComponent, AddTaskFormComponent } from './tasks';
import { InputColorDirective, HighlightElementDirective } from './directives';
import { ApiService, StoreHelper } from './services';
import { Store } from './store';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,        
        ListsComponent, ListsTableComponent, AddListFormComponent,
        TasksComponent, TasksTableComponent, AddTaskFormComponent,
        AboutComponent,
        InputColorDirective, HighlightElementDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule, 
        JsonpModule,
        AppRoutingModule
    ],
    providers: [
        ApiService,
        Store, 
        StoreHelper
    ],
    bootstrap: [ 
        AppComponent 
    ]
})

export class AppModule { }

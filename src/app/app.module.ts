import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RootRouterConfig } from './app.routes';
import { AboutComponent } from './about/about.component';
import { ListsComponent, ListsTableComponent, AddListFormComponent } from './lists';
import { TasksComponent, TasksTableComponent, AddTaskFormComponent } from './tasks';
import { InputColorDirective } from './directives';
import { ApiService, StoreHelper } from './services';
import { Store } from './store';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,        
        ListsComponent, ListsTableComponent, AddListFormComponent,
        TasksComponent, TasksTableComponent, AddTaskFormComponent,
        AboutComponent,
        InputColorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule, 
        JsonpModule,
        RouterModule.forRoot(RootRouterConfig, { useHash: true })
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

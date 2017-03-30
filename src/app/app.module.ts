import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RootRouterConfig } from './app.routes';
import { AboutComponent } from './about/about.component';
import { TasksComponent, TasksTableComponent } from './tasks';
import { ListsComponent, ListsTableComponent, AddListFormComponent } from './lists';
import { ApiService } from './services';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,        
    ListsComponent, ListsTableComponent, AddListFormComponent,
    TasksComponent, TasksTableComponent,
    AboutComponent
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
    ApiService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

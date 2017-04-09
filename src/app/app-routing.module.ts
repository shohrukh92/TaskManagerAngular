import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ListsComponent } from './lists/lists.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
    { path: 'lists', component: ListsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tasks', component: TasksComponent },
    { path: '**', redirectTo: 'lists', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

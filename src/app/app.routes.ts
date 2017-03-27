import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ListsComponent } from './lists/lists.component';
import { TasksComponent } from './tasks/tasks.component';

export const RootRouterConfig: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'lists', component: ListsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tasks', component: TasksComponent }
];


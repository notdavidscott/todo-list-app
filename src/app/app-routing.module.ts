import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksDisplayComponent } from './modules/tasks/tasks-display/tasks-display.component';
import { TaskDisplayComponent } from './modules/tasks/task-display/task-display.component';
import { TaskDetailsComponent } from './modules/tasks/task-details/task-details.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';


const routes: Routes = [

  {
    path: 'task-form', 
    component: TaskFormComponent
  },
  {
    path: 'task-details/:id',
    component: TaskDetailsComponent
  }, 
  {
    path: '',
    component: TasksDisplayComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

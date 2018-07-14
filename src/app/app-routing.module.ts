import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksDisplayComponent } from './modules/tasks/tasks-display/tasks-display.component';
import { TaskDisplayComponent } from './modules/tasks/task-display/task-display.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [

  {
    path: 'task-display/{{task.id}}',
    component: TaskDisplayComponent 
  }, 
  {
    path: 'tasks', 
    component: TasksDisplayComponent
  }, 
  {
    path: 'task-form', 
    component: TaskFormComponent
  },
  {
    path: '',
    component: TasksDisplayComponent
  }
  // {
  //   path: '',
  //   component: TasksDisplayComponent, 
  // }
 
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

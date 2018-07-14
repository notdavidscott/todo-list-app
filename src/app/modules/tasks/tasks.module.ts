import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksDisplayComponent } from './tasks-display/tasks-display.component';

import { HttpClientModule } from '@angular/common/http';  
import { TaskDisplayComponent } from './task-display/task-display.component';


@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  declarations: [
    TasksDisplayComponent, 
    TaskDisplayComponent
  ], 
  exports: [
    TasksDisplayComponent,
    TaskDisplayComponent
  ]
})
export class TasksModule { }

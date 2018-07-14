import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksDisplayComponent } from './tasks-display/tasks-display.component';

import { HttpClientModule } from '@angular/common/http';  
import { TaskDisplayComponent } from './task-display/task-display.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule, 
    RouterModule,
  ],
  declarations: [
    TasksDisplayComponent, 
    TaskDisplayComponent, 
    TaskDetailsComponent, 
  ], 
  exports: [
    TasksDisplayComponent,
    TaskDisplayComponent,
    TaskDetailsComponent,
    
  ]
})
export class TasksModule { }

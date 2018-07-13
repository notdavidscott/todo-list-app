import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  

import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './services/tasks.service';
import { TaskFormComponent } from './task-form/task-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TasksService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

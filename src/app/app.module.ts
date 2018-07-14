import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  

import { TasksService } from './services/tasks.service';
import { TaskFormComponent } from './components/task-form/task-form.component';


import { AppRoutingModule } from './/app-routing.module';

import { TasksModule } from './modules/tasks/tasks.module';




@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    TasksModule,

  ],
  providers: [
    TasksService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Injectable } from '@angular/core';
import { Task } from '../../models/task';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {
  model: Task = new Task;
  tasks: Task[];
  lastId = 0;
  
  constructor() { }

  ngOnInit() {

  }

  addTask(task: Task): TaskFormComponent {
    this.model = new Task;
    if(task.id){
      task.id = ++this.lastId
    }
    return this;
  }

  onSubmit() {
    this.addTask(new Task);
    console.log('Submission Successful: ', this.model);
  
  }
}

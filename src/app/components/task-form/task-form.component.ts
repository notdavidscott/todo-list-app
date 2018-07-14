import { Component, OnInit, Injectable } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {
  model: Task = new Task();
  lastId = 0;
  tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

  addTask(task: Task): TaskFormComponent {
    if(task.id){
      task.id = ++this.lastId
    }
    this.tasks.push(task);
    return this;
  }



  onSubmit() {
   
    console.log('Submission Successful: ', this.model);
  }
}

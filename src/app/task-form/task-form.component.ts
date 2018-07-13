import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  model: Task = new Task();
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Submission Successful: ', this.model);
  }

}

import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  dataService: TasksService;

  constructor(private tasksService: TasksService) {
     this.dataService = this.tasksService;
    }

  ngOnInit() {
    this.dataService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}

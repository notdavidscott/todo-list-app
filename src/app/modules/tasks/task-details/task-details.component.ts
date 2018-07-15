import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

import { Task } from '../../../models/task';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  public task: Task;

  constructor(
    private http: HttpClient,
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private location: Location
  ){}
    
  ngOnInit() {
    this.getTask();
  }
  getTask() {
    const id = +this.route.snapshot.paramMap.get('id'); 
    console.log('id: ' +  id);

    this.tasksService.getTask(id).subscribe(task => (this.task = task));
    };
   	
     	
  
  goBack() {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../models/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  private taskRoute = 'http://localhost:3000/tasks';
 

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ){
    
  }

  ngOnInit() {
    this.getTask();
  }
//this needs to change 
  getTask() {
    this.http.get<Task>(this.taskRoute).subscribe(tasks => { 			
      this.task = tasks; 			
      console.log('Tasks:', this.task); 		
    });
  }
  goBack() {
    this.location.back();
  }
}

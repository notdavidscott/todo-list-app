import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Task } from '../../../models/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TasksService } from "../../../services/tasks.service";
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-tasks-display',
  templateUrl: './tasks-display.component.html',
  styleUrls: ['./tasks-display.component.css']
})
export class TasksDisplayComponent implements OnInit {
 
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];
 

  constructor(private http: HttpClient) {}  	

	getTasks() { 		
	  this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => { 			
	  this.tasks = tasks; 			
	  //console.log('Tasks:', this.tasks); 		
  }); 	
  
} 	

	ngOnInit() { 		
		this.getTasks(); 
  }

  onTaskDeleted(taskId) {
    let taskIndex = 0;
    for(let task of this.tasks) {
      if(task.id === taskId ) {
        this.tasks.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }  
   
  }

 

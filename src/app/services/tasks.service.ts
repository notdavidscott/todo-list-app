import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  task: Task;
  tasks: Task[];
  
  getTasks = (): Observable<Task[]> => {
      return of(this.tasks);
  };
  getTask = (): Observable<Task> => {
    return of(this.task);
  };
  constructor() { }
}

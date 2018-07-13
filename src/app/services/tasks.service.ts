import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [

    {
      id: 0,
      name: 'Get Ready',
      description: 'Refluff pillows, tidy sheet, and put decor pillows back on'
    },
    {
      id: 1,
      name: 'Make Coffee', 
      description: 'Grind coffee beans, steam milk, add caramel syrup to cup, pull double shot then add to cup.'
    }, 
    {
      id: 2, 
      name: 'Pick Up Guitar Strings', 
      description: 'Go to Jim\'\s music and pick up Ernie Ball 10s strings for Telecaster.'
    }
  ];
  getTasks = (): Observable<Task[]> => {
      return of(this.tasks);
  };

  constructor() { }
}

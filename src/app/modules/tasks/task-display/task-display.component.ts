import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter} from '@angular/core'; //watch for this
import { Task } from '../../../models/task';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.css']
})
export class TaskDisplayComponent implements OnInit {

  @Input() task: Task; 
  @Output() taskDeleted: EventEmitter<number>= new EventEmitter();
  @Output() taskViewed: EventEmitter<number>= new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  onClickDelete() {
    alert("Deleted" + ' "' + this.task.name + '" from To-Dos.');
    this.taskDeleted.emit(this.task.id);
 
  }

 

  
}

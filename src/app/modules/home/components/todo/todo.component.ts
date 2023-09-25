import { Component, Input, EventEmitter, Output } from '@angular/core';
import Task from '../../../../shared/models/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() public task: Task = {name: '', status:'todo'};
  @Output() public eventEmitter = new EventEmitter<Task>();
  public canDestroy: boolean = false;

  constructor() {

  }

  public changeStatus() {
    this.task.status === 'todo' ?  this.task.status = 'done' : this.task.status = 'todo';
  }

  public destroyComponent() {
    this.canDestroy = true;
  }

  public editTodo() {
    this.eventEmitter.emit(this.task);
  }
}

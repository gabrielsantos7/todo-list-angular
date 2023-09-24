import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() public task: string = '';
  @Output() public eventEmitter = new EventEmitter<string>();
  public status: boolean = false;
  public canDestroy: boolean = false;

  constructor() {

  }

  public changeStatus() {
    this.status = !this.status;
  }

  public destroyComponent() {
    this.canDestroy = true;
  }

  public editTodo() {
    this.eventEmitter.emit(this.task);
  }
}

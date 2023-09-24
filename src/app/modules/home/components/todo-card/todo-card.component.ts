import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  public viewEditForm = false;
  public outputTask: string | undefined;
  public task = '';
  public tasks: string[] = [];

  constructor() {}

  addTask() {
    if (this.task.trim() !== '') {
      this.tasks.push(this.task);
      this.task = '';
    }
  }

  showEditForm() {
    this.viewEditForm = !this.viewEditForm;
  }

  editTask(task: string) {
    this.showEditForm();
    this.outputTask = task;
  }

  // Corrigir isto
  updateTask() {
    if (typeof this.outputTask === 'string') {
      const index = this.tasks.indexOf(this.outputTask);
      if (index !== -1) {
        this.tasks[index] = this.task;
      }
    }
  
    this.showEditForm();
  }
  
  
  
}

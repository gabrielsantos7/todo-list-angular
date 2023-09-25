import { Component } from '@angular/core';
import Task from '../../../../shared/models/Task'

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  public viewEditForm = false;

  public outputTask: string | undefined;
  public task = '';
  public tasks: Task[] = [];

  public searchText: string = '';
  public selectedStatus: string = 'all';

  constructor() {}

  addTask() {
    if (this.task.trim() !== '') {
      this.tasks.push({ name: this.task, status: 'todo' });
      this.task = '';
    }
  }

  showEditForm() {
    this.viewEditForm = !this.viewEditForm;
    this.task = '';
  }

  editTask(task: string) {
    this.showEditForm();
    this.task = task;
    this.outputTask = task;
  }

  updateTask() {
    if (this.outputTask && typeof this.outputTask === 'string') {
      const taskToUpdate = this.tasks.find(task => task.name === this.outputTask);

      if (taskToUpdate) {
        taskToUpdate.name = this.task;
      }
    }

    this.showEditForm();
  }


  filterTasks(): Task[] {
    let filteredTasks = this.tasks;

    // Filtrar por status
    if (this.selectedStatus === 'done') {
      filteredTasks = filteredTasks.filter(task => task.status === 'done');
    } else if (this.selectedStatus === 'todo') {
      filteredTasks = filteredTasks.filter(task => task.status === 'todo');
    }

    // Filtrar por texto de busca
    if (this.searchText) {
      filteredTasks = filteredTasks.filter(task =>
        task.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    return filteredTasks;
  }


  clearSearch() {
    this.searchText = '';
  }
}

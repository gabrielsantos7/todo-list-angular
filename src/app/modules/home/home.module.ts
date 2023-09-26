import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoCardComponent,
    TodoComponent,
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    TodoCardComponent,
    TodoComponent
  ]
})
export class HomeModule { }

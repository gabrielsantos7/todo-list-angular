import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CheckIconComponent } from './components/check-icon/check-icon.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    CheckIconComponent,
    TodoCardComponent,
    TodoComponent,
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    HeaderComponent,
    TodoCardComponent,
    TodoComponent
  ]
})
export class HomeModule { }

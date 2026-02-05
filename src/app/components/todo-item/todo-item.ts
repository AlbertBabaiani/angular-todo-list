import { Component, input, output } from '@angular/core';
import { Todo } from '../../core/models/todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo = input.required<Todo>();

  check = output<void>();
  delete = output<void>();
}

import { Component, input, output } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';
import { Todo } from '../../core/models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  todos = input.required<Todo[]>();

  check = output<string>();
  delete = output<string>();
}

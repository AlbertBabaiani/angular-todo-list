import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoWrapper } from './feature/todo-wrapper/todo-wrapper';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoWrapper],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-todo-list');
}

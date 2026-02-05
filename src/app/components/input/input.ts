import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../core/models/todo';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  task = signal<string>('');
  completed = signal<boolean>(false);

  todoInput = output<Omit<Todo, 'id'>>();

  toggleCompleted(): void {
    this.completed.update((val) => !val);
  }

  addTodo(): void {
    const trimmed_task = this.task().trim();

    // Add Logic
    if (!trimmed_task.length) return;

    this.todoInput.emit({ task: trimmed_task, completed: this.completed() });
    this.task.set('');
    this.completed.set(false);
  }
}

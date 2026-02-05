import { computed, effect, Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo';
import { FilterType } from '../models/filter';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly STORAGE_KEY = 'angular_todo_app_data';

  private _todos = signal<Todo[]>(this.loadFromStorage());

  private _filter = signal<FilterType>('all');
  readonly filter = this._filter.asReadonly();

  constructor() {
    effect(() => {
      const todos = this._todos();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    });
  }

  todos = computed(() => {
    const f = this._filter();

    if (f === 'active') return this._todos().filter((t) => !t.completed);
    else if (f === 'completed') return this._todos().filter((t) => t.completed);

    return this._todos();
  });

  items_left_quantity = computed(() => {
    return this._todos().filter((t) => !t.completed).length;
  });

  private loadFromStorage(): Todo[] {
    const data = localStorage.getItem(this.STORAGE_KEY);

    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        return [];
      }
    }

    return [];
  }

  changeFilter(new_filter: FilterType): void {
    if (new_filter === this._filter()) return;
    this._filter.set(new_filter);
  }

  addTodo(todo: Omit<Todo, 'id'>) {
    const trimmed_task = todo.task.trim();
    if (!trimmed_task.length) return;

    const final_todo: Todo = {
      id: crypto.randomUUID(),
      ...todo,
    };

    this._todos.update((arr) => [final_todo, ...arr]);
  }

  clearCompleted(): void {
    const active_todos = this._todos().filter((todo) => !todo.completed);
    this._todos.set(active_todos);
  }

  changeCompletion(id: string): void {
    const changed_list = this._todos().map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    this._todos.set(changed_list);
  }

  deleteTodo(id: string): void {
    const filtered_todo = this._todos().filter((todo) => todo.id !== id);
    this._todos.set(filtered_todo);
  }
}

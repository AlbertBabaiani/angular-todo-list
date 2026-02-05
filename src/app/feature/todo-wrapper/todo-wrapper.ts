import { Component, inject } from '@angular/core';
import { Input } from '../../components/input/input';
import { TodoList } from '../../components/todo-list/todo-list';
import { TodoFilter } from '../../components/todo-filter/todo-filter';
import { TodoFooter } from '../../components/todo-footer/todo-footer';
import { BgImage } from '../../components/bg-image/bg-image';
import { TodosService } from '../../core/services/todos-service';
import { FilterType } from '../../core/models/filter';
import { Header } from '../../components/header/header';
import { ThemeChanger } from '../../core/services/theme-changer';
import { Todo } from '../../core/models/todo';

@Component({
  selector: 'app-todo-wrapper',
  imports: [Input, TodoList, TodoFilter, TodoFooter, BgImage, Header],
  templateUrl: './todo-wrapper.html',
  styleUrl: './todo-wrapper.scss',
})
export class TodoWrapper {
  private service = inject(TodosService);
  private themeChanger = inject(ThemeChanger);

  is_dark_theme = this.themeChanger.darkTheme;

  changeTheme(dark: boolean): void {
    this.themeChanger.changeTheme(dark);
  }

  todos = this.service.todos;
  items_left_quantity = this.service.items_left_quantity;

  filter = this.service.filter;

  addTodo(newTodo: Omit<Todo, 'id'>): void {
    this.service.addTodo(newTodo);
  }

  clearCompleted(): void {
    this.service.clearCompleted();
  }

  changeFilter(filter: FilterType): void {
    this.service.changeFilter(filter);
  }

  toggleCheck(id: string) {
    this.service.changeCompletion(id);
  }

  deleteTodo(id: string) {
    this.service.deleteTodo(id);
  }
}

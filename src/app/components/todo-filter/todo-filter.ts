import { Component, input, output } from '@angular/core';
import { FilterType } from '../../core/models/filter';

@Component({
  selector: 'app-todo-filter',
  imports: [],
  templateUrl: './todo-filter.html',
  styleUrl: './todo-filter.scss',
})
export class TodoFilter {
  filter = input.required<FilterType>();

  change_filter = output<FilterType>();

  changeFilter(new_filter: FilterType): void {
    this.change_filter.emit(new_filter);
  }
}

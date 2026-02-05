import { Component, computed, input, output } from '@angular/core';
import { TodoFilter } from '../todo-filter/todo-filter';

@Component({
  selector: 'app-todo-footer',
  imports: [TodoFilter],
  templateUrl: './todo-footer.html',
  styleUrl: './todo-footer.scss',
})
export class TodoFooter {
  quantity = input.required<string, number>({
    transform: (value: number) => {
      if (value === 1) return '1 item left';
      else if (value <= 0) return 'No items';

      return `${value} items left`;
    },
  });

  clear = output<void>();
}

import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';

@Component({
  imports: [HighlightCompletedTodo],
  selector: 'app-todo-item',
  styleUrl: './todo-item.css',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  item = input.required<Todo>();
  itemToggled = output<Todo>();

  todoClicked() {
    this.itemToggled.emit(this.item());
  }
}

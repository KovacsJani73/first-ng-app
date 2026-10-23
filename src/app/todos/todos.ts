import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todos';
import { Todo } from '../model/todo.type';

@Component({
  imports: [],
  selector: 'app-todos',
  styleUrl: './todos.css',
  templateUrl: './todos.html',
})
export class Todos implements OnInit {
  todoService = inject(TodoService)
  todoItems = signal<Array<Todo>>([])

  ngOnInit(): void {
    console.log(this.todoService.todoItems)
    this.todoItems.set(this.todoService.todoItems)
  }
}

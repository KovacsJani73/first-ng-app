import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

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
    this.todoService
    .getTodosFromApi()
    .pipe(
      catchError( (err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe( (todos) => { this.todoItems.set(todos)}

    )
  }
}

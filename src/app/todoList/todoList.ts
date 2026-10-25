import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoListService } from '../services/todoList';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  imports: [TodoItem,FormsModule,FilterTodosPipe],
  selector: 'app-todo-list',
  styleUrl: './todoList.css',
  templateUrl: './todoList.html',
})
export class TodoList implements OnInit {
  todoListService = inject(TodoListService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoListService
      .getTodoListFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => { this.todoItems.set(todos) }
      )
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((ts) => {
      return ts.map((t) => {
        if (t.id == todoItem.id) {
          return {
            ...t, completed: !t.completed
          }
        }
        return t;
      })
    })
  }

}

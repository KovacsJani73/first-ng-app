import { inject, Service } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Service()
export class TodoService {
    http = inject(HttpClient);
    getTodosFromApi() {
        const url = `https://jsonplaceholder.typicode.com/todos`
        return this.http.get<Array<Todo>>(url);
    }
}

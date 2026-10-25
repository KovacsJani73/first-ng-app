import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then((m) => m.Home)
        },
    },
    {
        path: 'todoList',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./todoList/todoList').then((m) => m.TodoList)
        },
    }
];

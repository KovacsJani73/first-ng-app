import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(inputList: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return inputList;
    }
    const filterTerm = searchTerm.toLowerCase();
    return inputList.filter(td => {
      return td.title.toLocaleLowerCase().includes(filterTerm);
    })
  }
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../modal/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: "111",
        title: 'Learn C++',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: "222",
        title: 'Learn Angular',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: "333",
        title: 'Learn React',
        isCompleted: true,
        date: new Date(),
      },
    ];
  }

  getTodo() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.forEach((singleTodo) => {
      if (singleTodo.id === todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo:Todo){
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id== todo.id
    )

    this.todos.splice(indexofTodo,1)
  }

}

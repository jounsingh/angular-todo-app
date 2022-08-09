import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modal/Todo';
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons"
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos:Todo[] = [];

  constructor(private todoServies:TodoService) { }

  ngOnInit(): void {
    this.todoServies.getTodo().subscribe(todo=>{
      this.todos=todo
    })
  }

  changeTodoStatus(todo:Todo){
    this.todoServies.changeStatus(todo)
  }

  deleteTodo(todo:Todo){
    this.todoServies.deleteTodo(todo)
  }

}

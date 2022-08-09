import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modal/Todo';
import { TodoService } from 'src/app/service/todo.service';
import {v4 as uuidV4} from "uuid";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle:string=''

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    const newTodo={
      id:uuidV4(),
      title:this.todoTitle,
      isCompleted:false,
      date:new Date()
    }

    this.todoService.addTodo(newTodo)
    this.todoTitle=""

  }

}

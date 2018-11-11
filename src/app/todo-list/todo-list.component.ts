import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {Store} from '@ngrx/store';
import {TodoState} from '../todo.state';
import {observable} from 'rxjs';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private service: TodoService) {
    this.readTodoState();
  }

  ngOnInit() {
  }

  private readTodoState() {
    this.service.getTodos()
      .subscribe(todos => {
        this.todos = todos;
      });
  }
}

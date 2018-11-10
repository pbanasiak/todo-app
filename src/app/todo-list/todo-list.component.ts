import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import { Store } from '@ngrx/store';
import {TodoState} from '../todo-state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  constructor( private store: Store<TodoState>) {
    this.readTodoState();
  }

  ngOnInit() {
  }

  private readTodoState() {
    this.store.select(state => state.todos)
      .subscribe(todos => {
        this.todos = todos;
      });
  }
}

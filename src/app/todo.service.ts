import { Injectable } from '@angular/core';
import {Todo} from './todo';
import { AddTodoAction, DeleteTodoAction, UpdateTodoAction, MarkDoneAction } from 'actions/todo.actions';
import { Store } from '@ngrx/store';
import {TodoState} from './todo-state';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private store: Store<TodoState>) { }

  addTodo (todo: Todo): void {
    const addTodoAction = new AddTodoAction(null);
    this.store.dispatch(addTodoAction);
    return null;
  }

  deleteTodo (todo: Todo): void {
    const deleteTodoAction = new DeleteTodoAction(null);
    this.store.dispatch(deleteTodoAction);
    return null;
  }

  updateTodo (todo: Todo): void {
    const updateTodoAction = new UpdateTodoAction(null);
    this.store.dispatch(updateTodoAction);
    return null;
  }

  markDone (todo: Todo): void {
    const markDoneAction = new MarkDoneAction(null);
    this.store.dispatch(markDoneAction);
    return null;
  }
}

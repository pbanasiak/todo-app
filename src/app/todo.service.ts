import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {AddTodoAction, DeleteTodoAction, UpdateTodoAction, MarkDoneAction} from './actions/todo.actions';
import {Store} from '@ngrx/store';
import {TodoState} from './todo.state';
import {Observable} from 'rxjs';
import {getTodos} from './selectors/todo.selectors';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<TodoState>) {
  }

  getTodos(): Observable<Todo[]> {
    return this.store.select(getTodos);
  }

  addTodo(title: string): void {
    const newTodo = new Todo(title);
    const addTodoAction = new AddTodoAction(newTodo);
    this.store.dispatch(addTodoAction);
  }

  deleteTodo(todo: Todo): void {
    const deleteTodoAction = new DeleteTodoAction(null);
    this.store.dispatch(deleteTodoAction);
  }

  updateTodo(todo: Todo): void {
    const updateTodoAction = new UpdateTodoAction(null);
    this.store.dispatch(updateTodoAction);
  }

  markDone(todo: Todo): void {
    const markDoneAction = new MarkDoneAction(null);
    this.store.dispatch(markDoneAction);
  }
}

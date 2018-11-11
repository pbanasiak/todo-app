import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {AddTodoAction, DeleteTodoAction, UpdateTodoAction, ChangeIsDoneAction, LoadTodosAction} from './actions/todo.actions';
import {Store} from '@ngrx/store';
import {TodoState} from './todo.state';
import {Observable} from 'rxjs';
import {getTodos} from './selectors/todo.selectors';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public static readonly LOCAL_STORAGE_KEY = 'todosKey';

  constructor(private store: Store<TodoState>) {
    let todos = JSON.parse(localStorage.getItem(TodoService.LOCAL_STORAGE_KEY));
    if (todos == null) {
      todos = [];
    }
    const loadTodosAction = new LoadTodosAction(todos);
    this.store.dispatch(loadTodosAction);
    this.syncTodosToLocalStorage();
  }

  syncTodosToLocalStorage(): void {
    this.store.select(getTodos).subscribe(todos => localStorage.setItem(TodoService.LOCAL_STORAGE_KEY, JSON.stringify(todos)));
  }

  getTodos(): Observable<Todo[]> {
    return this.store.select(getTodos);
  }

  addTodo(title: string): void {
    const newTodo = new Todo(title);
    const addTodoAction = new AddTodoAction(newTodo);
    this.store.dispatch(addTodoAction);
  }

  deleteTodo(id: number): void {
    const deleteTodoAction = new DeleteTodoAction(id);
    this.store.dispatch(deleteTodoAction);
  }

  updateTodo(id: number, title: string): void {
    const updateTodoAction = new UpdateTodoAction(id, title);
    this.store.dispatch(updateTodoAction);
  }

  changeIsDone(id: number): void {
    const changeIsDoneAction = new ChangeIsDoneAction(id);
    this.store.dispatch(changeIsDoneAction);
  }
}

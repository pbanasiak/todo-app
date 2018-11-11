import {createSelector} from '@ngrx/store';
import {TodoState} from '../todo.state';
import {Todo} from '../todo';

export const getTodoState = (state: TodoState) => state.todoReducer;
export const getTodos = (state: TodoState) => state.todoReducer.todos;

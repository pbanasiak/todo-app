import {Todo} from './todo';

export interface TodoState {
  todos: Todo[];
  todoReducer: TodoState;
}

export const initializeState = (): TodoState => {
  return ({
    todos: [],
    todoReducer: null
  });
};

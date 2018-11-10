import {Todo} from './todo';

export interface TodoState {
  todos: Todo[];
}

export const initializeState = (): TodoState => {
  return ({
    todos: [],
  });
};

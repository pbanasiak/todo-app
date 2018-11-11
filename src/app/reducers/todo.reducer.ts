import {Action} from '@ngrx/store';
import {ActionTypes, AddTodoAction, TodoActionType} from '../actions/todo.actions';
import {initializeState, TodoState} from '../todo.state';

export const initialState = initializeState();

export function todoReducer(state: TodoState = initialState, action: TodoActionType) {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.todo
        ]
      };
    case ActionTypes.DELETE:
      return {
        ...state
      };

    case ActionTypes.UPDATE:
      return {
        ...state
      };

    case ActionTypes.MARK_DONE:
      return {
        ...state
      };

    default:
      return state;
  }
}

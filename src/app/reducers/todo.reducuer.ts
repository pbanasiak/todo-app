import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/todo.actions';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state
      };

    case ActionTypes.REMOVE:
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

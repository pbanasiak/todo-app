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
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    case ActionTypes.UPDATE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              title: action.title
            };
          } else {
            return todo;
          }
        })
      };

    case ActionTypes.CHANGE_IS_DONE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              isDone: !todo.isDone
            };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
}

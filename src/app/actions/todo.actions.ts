import {Action} from '@ngrx/store';
import {Todo} from '../todo';

export enum ActionTypes {
  ADD = '[Todo] Add',
  DELETE = '[Todo] Delete',
  UPDATE = '[Todo] Update',
  CHANGE_IS_DONE = '[Todo] Change is done',
}

export class AddTodoAction implements Action {
  readonly type = ActionTypes.ADD;

  constructor(public todo: Todo) {
  }
}

export class DeleteTodoAction implements Action {
  readonly type = ActionTypes.DELETE;

  constructor(public id: number) {
  }
}

export class UpdateTodoAction implements Action {
  readonly type = ActionTypes.UPDATE;

  constructor(public payload: { id: string; title: string }) {
  }
}

export class ChangeIsDoneAction implements Action {
  readonly type = ActionTypes.CHANGE_IS_DONE;

  constructor(public id: number) {
  }
}

export type TodoActionType =
  AddTodoAction |
  DeleteTodoAction |
  UpdateTodoAction |
  ChangeIsDoneAction

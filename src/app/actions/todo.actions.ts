import {Action} from '@ngrx/store';

export enum ActionTypes {
  ADD = '[Todo] Add',
  REMOVE = '[Todo] Remove',
  UPDATE = '[Todo] Update',
  MARK_DONE = '[Todo] Mark done',
}

export class AddTodoAction implements Action {
  readonly type = ActionTypes.ADD;

  constructor(public payload: { title: string }) {}
}

export class RemoveTodoAction implements Action {
  readonly type = ActionTypes.REMOVE;

  constructor(public payload: { id: string }) {}
}

export class UpdateTodoAction implements Action {
  readonly type = ActionTypes.UPDATE;

  constructor(public payload: { id: string; title: string }) {}
}

export class MarkDoneAction implements Action {
  readonly type = ActionTypes.MARK_DONE;

  constructor(public payload: { id: string }) {}
}

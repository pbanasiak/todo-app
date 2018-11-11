import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoComponent} from './todo/todo.component';
import {StoreModule} from '@ngrx/store';
import {todoReducer} from './reducers/todo.reducer';
import {NewTodoComponent} from './new-todo/new-todo.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todoReducer}),
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './reducers/todo.reducer';
import { NewTodoComponent } from './new-todo/new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

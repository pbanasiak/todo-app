import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {TodoState} from '../todo.state';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.sass']
})
export class NewTodoComponent implements OnInit {

  title: FormControl;

  constructor(private service: TodoService) {
    this.title = new FormControl('');
  }

  ngOnInit() {
  }

  addTodo() {
    this.service.addTodo(this.title.value);
    this.title.setValue('');
  }


}

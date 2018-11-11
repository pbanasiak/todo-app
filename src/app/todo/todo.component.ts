import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  title: FormControl;

  constructor(private service: TodoService) {
    this.title = new FormControl('');
  }

  ngOnInit() {
    this.title.setValue(this.todo.title);
  }

  deleteTodo() {
    this.service.deleteTodo(this.todo.id);
  }

  changeIsDone() {
    this.service.changeIsDone(this.todo.id);
  }

  updateTodo() {
    this.service.updateTodo(this.todo.id, this.title.value);
  }

}

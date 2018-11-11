import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private service: TodoService) {
  }

  ngOnInit() {
  }

  deleteTodo() {
    this.service.deleteTodo(this.todo.id);
  }

  changeIsDone() {
    this.service.changeIsDone(this.todo.id);
  }

}

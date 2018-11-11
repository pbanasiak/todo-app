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
  isDone: FormControl;
  editable: boolean;

  constructor(private service: TodoService) {
    this.title = new FormControl('');
    this.isDone = new FormControl(false);
    this.isDone.valueChanges
      .subscribe(state => {
        this.service.changeIsDone(this.todo.id);
      });
    this.editable = false;
  }

  ngOnInit() {
    this.title.setValue(this.todo.title, {emitEvent: false});
    this.isDone.setValue(this.todo.isDone, {emitEvent: false});
  }

  deleteTodo() {
    this.service.deleteTodo(this.todo.id);
  }

  updateTodo() {
    this.service.updateTodo(this.todo.id, this.title.value);
  }

  edit() {
    this.editable = true;
  }

}

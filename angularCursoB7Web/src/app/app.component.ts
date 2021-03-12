import { Component } from '@angular/core';
import {Todo} from './todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Angular B7Web';
  todoList: Todo[] = [];
  item: string = ''

  addTodo(todo: string) {
    this.todoList.push(new Todo(todo));
  }
}

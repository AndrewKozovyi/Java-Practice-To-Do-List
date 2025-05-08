import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {TasksListComponent} from '../tasks-list/tasks-list.component';

@Component({
  selector: 'app-to-do-list',
  imports: [
    HeaderComponent,
    TasksListComponent
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

}

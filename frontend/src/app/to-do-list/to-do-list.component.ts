import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {TasksListComponent} from '../tasks-list/tasks-list.component';
import {Task} from '../../interfaces';

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
  taskList: Task[] = [
    {
      id: 1,
      title: 'Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1',
      description: 'Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1Task 1'
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Task 2'
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Task 3'
    },
  ];

  addTask(task: Task) {
    this.taskList.unshift(task);
  }

  removeTask(id: number) {
    this.taskList = this.taskList.filter(task => task.id !== id);
  }

  updateTask(updatedTask: Task) {
    const index = this.taskList.findIndex(task => task.id === updatedTask.id);
    if (index > -1) {
      this.taskList[index] = updatedTask;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {TasksListComponent} from '../tasks-list/tasks-list.component';
import {Task} from '../../interfaces';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-to-do-list',
  imports: [
    HeaderComponent,
    TasksListComponent
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit {
  taskList: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.getAllTasks().subscribe(data => {
      console.log(data);
      this.taskList = data;
    });
  }

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

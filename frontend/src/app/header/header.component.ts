import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {AddTaskBoxComponent} from '../add-task-box/add-task-box.component';
import {AsyncPipe, NgIf} from '@angular/common';
import {PopupService} from '../popup-service.service';
import {Task} from '../../interfaces';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-header',
  imports: [
    AddTaskBoxComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  @Output() taskAdded = new EventEmitter<Task>();
  @Output() taskRemoved = new EventEmitter<number>();
  private _newTask!: Task;

  get newTask() {
    return this._newTask;
  }

  constructor(public popupService: PopupService, private taskService: TasksService) { }

  addTask() {
    const newTask = {
      title: 'New Task',
      description: 'New Task',
    };
    this.taskAdded.emit(newTask);
    this.taskService.addTask(newTask).subscribe();
    this._newTask = newTask;
  }

  onUpdateTask(updatedTask: Task) {
    this.taskAdded.emit(updatedTask);
  }

  onRemoveTask(id: number) {
    this.taskRemoved.emit(id);
  }
}

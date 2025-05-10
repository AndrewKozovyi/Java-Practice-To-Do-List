import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {AddTaskBoxComponent} from '../add-task-box/add-task-box.component';
import {AsyncPipe, NgIf} from '@angular/common';
import {PopupService} from '../popup-service.service';
import {Task} from '../../interfaces';

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

  constructor(public popupService: PopupService) {}

  addTask() {
    const newTask = {
      id: 0,
      title: 'New Task',
      description: 'New Task',
    };
    this.taskAdded.emit(newTask);
    this._newTask = newTask;
  }

  onUpdateTask(updatedTask: Task) {
    this.taskAdded.emit(updatedTask);
  }

  onRemoveTask(id: number) {
    this.taskRemoved.emit(id);
  }
}

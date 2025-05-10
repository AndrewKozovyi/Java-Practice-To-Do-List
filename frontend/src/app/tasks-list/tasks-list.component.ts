import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputSearchComponent} from '../input-search/input-search.component';
import {PopupService} from '../popup-service.service';
import {AddTaskBoxComponent} from '../add-task-box/add-task-box.component';
import {Task} from '../../interfaces';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, InputSearchComponent, AddTaskBoxComponent],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  @Input() taskList!: Task[];
  @Output() taskRemoved = new EventEmitter<number>();
  @Output() updateTask = new EventEmitter<Task>();
  selectedTask: Task | null = null;

  constructor(public popupService: PopupService) {}

  onUpdateTask(updatedTask: Task) {
    this.updateTask.emit(updatedTask);
  }

  onRemoveTask(id: number) {
    this.taskRemoved.emit(id);
  }

  onOpenPopup(task: Task) {
    this.selectedTask = task;
    this.popupService.open();
  }
}

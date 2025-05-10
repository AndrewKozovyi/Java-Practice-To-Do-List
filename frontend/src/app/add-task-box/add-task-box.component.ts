import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {InputMovingLettersComponent} from '../input-moving-letters/input-moving-letters.component';
import {PopupService} from '../popup-service.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {InputDescriptionComponent} from '../input-description/input-description.component';
import {Task} from '../../interfaces';

@Component({
  selector: 'app-add-task-box',
  templateUrl: './add-task-box.component.html',
  imports: [
    InputMovingLettersComponent,
    InputDescriptionComponent,
    NgIf,
    AsyncPipe
  ],
  styleUrls: ['./add-task-box.component.scss']
})
export class AddTaskBoxComponent {
  private _task!: Task;
  taskCopy!: Task;

  @Input()
  set task(value: Task) {
    this._task = value;
    this.taskCopy = { ...value };
  }

  get task(): Task {
    return this._task;
  }

  @Output() removeTask = new EventEmitter<number>();
  @Output() updateTask = new EventEmitter<Task>();

  constructor(public popupService: PopupService) {}

  onApplyClick() {
    this.updateTask.emit(this.taskCopy);
    this.popupService.close();
    console.log(this.taskCopy);
  }

  onDescriptionChange(updatedDescription: string) {
    this.taskCopy.description = updatedDescription;
  }

  onTitleChange(updatedTitle: string) {
    this.taskCopy.title = updatedTitle;
  }

  onDeleteClick(id: number) {
    this.removeTask.emit(id);
    this.popupService.close();
  }
}

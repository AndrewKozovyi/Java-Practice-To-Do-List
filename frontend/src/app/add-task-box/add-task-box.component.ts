import { Component } from '@angular/core';
import {InputMovingLettersComponent} from '../input-moving-letters/input-moving-letters.component';
import {PopupService} from '../popup-service.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {InputDescriptionComponent} from '../input-description/input-description.component';

@Component({
  selector: 'app-add-task-box',
  imports: [
    InputMovingLettersComponent,
    AsyncPipe,
    NgIf,
    InputDescriptionComponent
  ],
  templateUrl: './add-task-box.component.html',
  styleUrl: './add-task-box.component.scss'
})
export class AddTaskBoxComponent {
  constructor(public popupService: PopupService) {}
}

import { Component } from '@angular/core';
import {InputMovingLettersComponent} from '../input-moving-letters/input-moving-letters.component';

@Component({
  selector: 'app-add-task-box',
  imports: [
    InputMovingLettersComponent
  ],
  templateUrl: './add-task-box.component.html',
  styleUrl: './add-task-box.component.scss'
})
export class AddTaskBoxComponent {

}

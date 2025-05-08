import { Component } from '@angular/core';
import {AddTaskBoxComponent} from '../add-task-box/add-task-box.component';

@Component({
  selector: 'app-header',
  imports: [
    AddTaskBoxComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

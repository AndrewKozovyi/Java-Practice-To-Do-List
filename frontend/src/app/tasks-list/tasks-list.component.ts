import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputSearchComponent} from '../input-search/input-search.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, InputSearchComponent],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
 taskList: any = [
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


}

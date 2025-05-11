import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl: string = "http://localhost:8080/api/task";

  constructor(private api: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.api.get<Task[]>(`${this.apiUrl}/all`)
  }

  getTaskByID(id: number): Observable<Task> {
    return this.api.get<Task>(`${this.apiUrl}/${id}`)
  }

  addTask(task: Task): Observable<Task> {
    return this.api.post<Task>(`${this.apiUrl}/add`, task)
  }

  changeTask(task: Task): Observable<Task> {
    return this.api.put<Task>(`${this.apiUrl}/${task.id}`, task)
  }

  deleteTask(id: number): Observable<void> {
    return this.api.delete<void>(`${this.apiUrl}/${id}`)
  }
}

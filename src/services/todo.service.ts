import { ApiService } from './api.service';
import { TaskModel } from './task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private apiService: ApiService) {}

  async getTasks(): Promise<Array<TaskModel>> {
    return await this.apiService.get('tasks')
  }
}
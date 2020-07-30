import { ApiService } from './api.service';
import { TaskModel } from './task.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  constructor(private apiService: ApiService) {}

  list(): Array<TaskModel> {
    return this.apiService.get('/tasks');
  }
}
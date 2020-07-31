import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TaskModel } from '../services/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private raceService: TodoService) {}

  async getTasks(): Promise<void> {
    const tasks = await this.raceService.getTasks()
    console.log(tasks)
  }
}

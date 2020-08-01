import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TaskModel } from '../services/task.model';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: Array<TaskModel>

  constructor(private raceService: TodoService, title: Title, meta: Meta) {
    title.setTitle('Todo angular')
    meta.addTag({ name: 'author', content: 'nikitamax' })
  }

  async ngOnInit(): Promise<void> {
    this.tasks =  await this.raceService.getTasks()
  }
}

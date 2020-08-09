import { Component } from '@angular/core'
import { TodoService } from '../../services/todo.service'
import { TaskModel } from '../../services/task.model'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: TaskModel[]

  constructor(private todoService: TodoService) {}

  async ngOnInit() {
    this.getTasks()
  }

  getTasks() {
    this.todoService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }
}

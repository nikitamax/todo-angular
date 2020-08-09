import { Component, Input } from '@angular/core'
import { TaskModel } from '../../services/task.model'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  @Input() tasks: TaskModel[]

  constructor() {}
}

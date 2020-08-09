import { Component, Input } from '@angular/core'
import { TaskModel } from '../../services/task.model'

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task: TaskModel

  constructor() {}
}

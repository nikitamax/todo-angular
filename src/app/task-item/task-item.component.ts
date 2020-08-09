import { Component, Input } from '@angular/core'
import { TaskModel } from '../../services/task.model'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task: TaskModel
  @Input() deleteTask: Function
  @Input() toggleTask: Function

  constructor(private todoService: TodoService) {}

  handleDeleteBtnClick(id) {
    this.deleteTask(id)
  }

  handleToggleTask(task) {
    this.toggleTask(task)
  }
}

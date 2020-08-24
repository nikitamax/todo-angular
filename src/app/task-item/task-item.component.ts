import { Component, Input, ViewChild, ElementRef } from '@angular/core'
import { TaskModel } from '../../services/task.model'

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task: TaskModel
  @Input() deleteTask: Function
  @Input() toggleTask: Function
  @Input() editTask: Function
  @ViewChild('liRef') liRef: ElementRef
  @ViewChild('editInput') editInput: ElementRef
  editedTaskText: string

  constructor() {}

  handleDeleteBtnClick = (id) => {
    this.deleteTask(id)
  }

  handleToggleTask = (task) => {
    this.toggleTask(task)
  }

  edit = () => {
    if (!this.editedTaskText) {
      this.deleteTask(this.task.id)
      return
    }
    this.editTask({ ...this.task, text: this.editedTaskText })
  }

  handleDoubleClick = () => {
    this.editedTaskText = this.task.text
    this.liRef.nativeElement.classList.add('editing')
    this.editInput.nativeElement.focus()
    this.editInput.nativeElement.value = this.task.text
  }

  handleBlur = () => {
    this.liRef.nativeElement.classList.remove('editing')
    this.edit()
  }
}

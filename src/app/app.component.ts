import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Meta } from '@angular/platform-browser'
import { TodoService } from '../services/todo.service'
import { TaskModel } from '../services/task.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: TaskModel[]
  newTaskText: string = ''

  constructor(private todoService: TodoService, title: Title, meta: Meta) {
    title.setTitle('Todo angular')
    meta.addTag({ name: 'author', content: 'nikitamax' })
  }

  async ngOnInit() {
    this.getTasks()
  }

  getTasks = () => {
    this.todoService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }

  addTask = () => {
    if (!this.newTaskText) {
      return
    }
    this.todoService.addTask(this.newTaskText).subscribe((newTask) => {
      this.tasks.push(newTask)
      this.newTaskText = ''
    })
  }

  deleteTask = (id) => {
    this.todoService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    })
  }

  toggleTask = (changedTask) => {
    this.todoService.toggleTask(changedTask).subscribe(() => {
      this.tasks = this.tasks.map((task) => {
        if (task.id === changedTask.id) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
    })
  }

  editTask = (editedTask) => {
    this.todoService.editTask(editedTask).subscribe(() => {
      this.tasks = this.tasks.map((task) => {
        if (task.id === editedTask.id) {
          return editedTask
        }
        return task
      })
    })
  }
}

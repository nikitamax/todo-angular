import { TaskModel } from './task.model'
import { Injectable } from '@angular/core'
import db from './firebase'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTasks(): Observable<TaskModel[]> {
    return new Observable<TaskModel[]>((observer) => {
      let tasks = []
      try {
        db.collection('tasks')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              const task = {
                ...data,
                id: doc.id,
              }
              tasks.push(task)
            })
          })

        observer.next(tasks)
      } catch (error) {
        observer.error(error)
      }
    })
  }

  addTask(text): Observable<TaskModel> {
    return new Observable<TaskModel>((observer) => {
      try {
        db.collection('tasks')
          .add({
            text,
            completed: false,
          })
          .then((doc) => {
            observer.next({
              id: doc.id,
              completed: false,
              text,
            })
          })
      } catch (error) {
        observer.error(error)
      }
    })
  }

  deleteTask(id): Observable<TaskModel> {
    return new Observable<TaskModel>((observer) => {
      try {
        db.collection('tasks')
          .doc(id)
          .delete()
          .then(() => {
            observer.next()
          })
      } catch (error) {
        observer.error(error)
      }
    })
  }

  toggleTask(task): Observable<TaskModel> {
    return new Observable<TaskModel>((observer) => {
      try {
        db.collection('tasks')
          .doc(task.id)
          .set({ ...task, completed: !task.completed })
          .then(() => {
            observer.next()
          })
      } catch (error) {
        observer.error(error)
      }
    })
  }

  editTask(task): Observable<TaskModel> {
    return new Observable<TaskModel>((observer) => {
      try {
        db.collection('tasks')
          .doc(task.id)
          .set(task)
          .then(() => {
            observer.next()
          })
      } catch (error) {
        observer.error(error)
      }
    })
  }
}

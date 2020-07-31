import db from './firebase'
import { TaskModel } from './task.model'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  async get(collection): Promise<Array<TaskModel>> {
    const querySnapshot = await db.collection(collection).get()
    let arr = []

    querySnapshot.forEach(doc => {
      const data = doc.data();
      const item = {
        ...data,
        id: doc.id
      };
      arr.push(item)
    })

    return arr
  }
}
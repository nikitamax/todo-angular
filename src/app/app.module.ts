import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TaskListComponent } from './task-list/task-list.component'
import { TaskItemComponent } from './task-item/task-item.component'

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

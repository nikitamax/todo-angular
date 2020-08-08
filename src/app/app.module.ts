import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainInputComponent } from './main-input/main-input.component'
import { TaskListComponent } from './task-list/task-list.component'
import { TaskItemComponent } from './task-item/task-item.component'

@NgModule({
  declarations: [
    AppComponent,
    MainInputComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

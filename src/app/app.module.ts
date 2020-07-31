import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInputComponent } from './main-input/main-input.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ApiService } from '../services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainInputComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

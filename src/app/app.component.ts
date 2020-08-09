import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(title: Title, meta: Meta) {
    title.setTitle('Todo angular')
    meta.addTag({ name: 'author', content: 'nikitamax' })
  }
}

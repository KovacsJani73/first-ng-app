import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styles: [` 
    p { 
        background-color: red;
        font-size: 20px;
      } 
  `, ],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <p>Hello világ!</p>
    <router-outlet />
    <p>This is inside of app-component</p>
  `,
})
export class App {
  protected readonly title = signal('first-ng-app');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  imports: [Header, RouterOutlet],
  selector: 'app-root',
  styles: [` 
    main { 
        padding: 16px;
      } 
  `, ],
  template: `
    <app-header/>
    <main>
      <router-outlet /> 
    </main>
  `,
})
export class App {
  protected readonly titleString = signal('first-ng-app');
}

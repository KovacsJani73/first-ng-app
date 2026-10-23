import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  imports: [Greeting,Counter],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  messageForGreeting = signal('Hello world from home component!');
  keyUpHandler(event: KeyboardEvent) {
    console.log(`User pressed ${event.key} key in the text input!`);
  }
}

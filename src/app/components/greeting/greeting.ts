import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greeting',
  styleUrl: './greeting.css',
  templateUrl: './greeting.html',
})
export class Greeting {
  inputMessage = input<string>();
}

import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <div>{{ myName() }}</div>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular newß
    </a>
  `,
})
export class App {
  name = 'Angular';
  myName = signal<string>('Adi Silagy');
}

bootstrapApplication(App);

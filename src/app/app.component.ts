import { Component, ViewEncapsulation } from '@angular/core';

// This is our parent component that uses child component S5A4Component
// In template, the new component's unique selector, <app-S5A4> is used to achieve encapsulation
@Component({
  selector: 'app-root',
  template: `
  <br><br>
  <app-S5A4></app-S5A4>`
})
export class AppComponent {
  title = 'app';
}
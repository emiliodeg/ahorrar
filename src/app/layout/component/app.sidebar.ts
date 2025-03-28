import { Component, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';

@Component({
  selector: 'ahorrar-sidebar',
  standalone: true,
  imports: [AppMenu],
  template: ` <div class="layout-sidebar">
    <ahorrar-menu></ahorrar-menu>
  </div>`
})
export class AppSidebar {
  constructor(public el: ElementRef) {}
}

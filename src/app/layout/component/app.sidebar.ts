import { Component, ElementRef, inject } from '@angular/core';
import { AppMenu } from './app.menu';

@Component({
  selector: 'ahorrar-sidebar',

  imports: [AppMenu],
  template: ` <div class="layout-sidebar">
    <ahorrar-menu></ahorrar-menu>
  </div>`
})
export class AppSidebar {
  el = inject(ElementRef);
}

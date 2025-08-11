import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ahorrar-create-page',
  template: `
    <p>cargar budget!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreatePageComponent {}

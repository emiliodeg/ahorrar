import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ahorrar-main-page',
  imports: [],
  template: `
    <p>
      main-page works!
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MainPageComponent {

}

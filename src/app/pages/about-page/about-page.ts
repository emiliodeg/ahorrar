import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ahorrar-about-page',
  template: `<p>about-page works!</p>`,
  styleUrl: './about-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AboutPage {}

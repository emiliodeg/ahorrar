import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JumbotronComponent } from '@pages/home/ui/jumbotron/jumbotron.component';
import { CategoriesComponent } from './ui/categories/categories.component';
import { CtaComponent } from './ui/cta/cta.component';
import { FeaturesComponent } from './ui/features/features.component';
import { HowItWorksComponent } from './ui/how-it-works/how-it-works.component';
import { StatsComponent } from './ui/stats/stats.component';

@Component({
  selector: 'ahorrar-home-page',
  template: `<ahorrar-jumbotron />
    <ahorrar-stats />
    <ahorrar-categories />
    <ahorrar-features />
    <ahorrar-how-it-works />
    <ahorrar-cta />`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JumbotronComponent,
    CtaComponent,
    HowItWorksComponent,
    FeaturesComponent,
    CategoriesComponent,
    StatsComponent
  ]
})
export default class HomePageComponent {}

import { Component } from '@angular/core';
import { TopbarWidget } from './components/topbarwidget.component';
import { HeroWidget } from './components/herowidget';
import { FeaturesWidget } from './components/featureswidget';
import { HighlightsWidget } from './components/highlightswidget';
import { PricingWidget } from './components/pricingwidget';
import { FooterWidget } from './components/footerwidget';

@Component({
  selector: 'ahorrar-landing',
  imports: [
    TopbarWidget,
    HeroWidget,
    FeaturesWidget,
    HighlightsWidget,
    PricingWidget,
    FooterWidget
],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900">
      <div id="home" class="landing-wrapper overflow-hidden">
        <topbar-widget
          class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static"
        />
        <hero-widget />
        <features-widget />
        <highlights-widget />
        <pricing-widget />
        <ahorrar-footer-widget />
      </div>
    </div>
  `
})
export class Landing {}

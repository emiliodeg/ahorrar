import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';

@Component({
  selector: 'ahorrar-dashboard',
  imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
  template: `
    <div class="grid grid-cols-12 gap-8">
      <ahorrar-stats-widget class="contents" />
      <div class="col-span-12 xl:col-span-6">
        <ahorrar-recent-sales-widget />
        <ahorrar-best-selling-widget />
      </div>
      <div class="col-span-12 xl:col-span-6">
        <ahorrar-revenue-stream-widget />
        <ahorrar-notifications-widget />
      </div>
    </div>
  `
})
export class Dashboard {}

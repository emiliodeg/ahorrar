import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@shared/ui/header/header.component';
import { FooterComponent } from '@shared/ui/footer/footer.component';

@Component({
  selector: 'ahorrar-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent],
  template: `<ahorrar-header />
    <main><router-outlet /></main>
    <ahorrar-footer />`,
  styles: `
    :host {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100dvh;
    }

    main {
      padding-top: 64px;
    }
    
    ahorrar-header {
      position: fixed;
      inset: 0 0 auto;
      z-index: 10;
    }
  `
})
export class AppComponent {}

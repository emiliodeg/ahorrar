import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'ahorrar-jumbotron',
  imports: [MatIconModule, RouterLink, MatButtonModule],
  template: `
    <section class="overflow-hidden py-20 lg:py-32 bg-gradient-to-r from-blue-600/10 to-indigo-600/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance">
          Conectamos tus
          <em class="text-gradient not-italic">Proyectos</em>
          con los
          <em class="text-gradient not-italic">Mejores Proveedores</em>
        </h1>
        <p class="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          La plataforma líder para solicitar presupuestos y encontrar proveedores calificados. Obtén múltiples
          cotizaciones, compara precios y elige la mejor opción para tu proyecto.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a [routerLink]="auth.hasUser() ? '/presupuestar' : '/login'" matButton="filled" class="bordered--lg size--xl">
            <mat-icon>arrow_circle_right</mat-icon>
            <span>Solicitar Presupuesto</span>
          </a>

          <a [routerLink]="auth.hasUser() ? '/presupuestar' : '/login'" matButton="filled" class="secondary bordered--lg size--xl"
            >Unirse como Proveedor
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JumbotronComponent {
  readonly auth = inject(AuthService);
}

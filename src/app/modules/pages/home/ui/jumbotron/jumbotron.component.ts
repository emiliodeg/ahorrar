import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'ahorrar-jumbotron',
  imports: [MatIconModule, RouterLink],
  template: `
    <section class="overflow-hidden py-20 lg:py-32 bg-gradient-to-r from-blue-600/10 to-indigo-600/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" >
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance">
          Conectamos tus
          <em class="bg-gradient-to-r bg-clip-text text-transparent not-italic from-blue-600 to-indigo-600">Proyectos</em>
          con los
          <em class="bg-gradient-to-r bg-clip-text text-transparent not-italic from-blue-600 to-indigo-600">Mejores Proveedores</em>
        </h1>
        <p class="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          La plataforma líder para solicitar presupuestos y encontrar proveedores calificados. Obtén múltiples
          cotizaciones, compara precios y elige la mejor opción para tu proyecto.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            [routerLink]="auth.hasUser() ? '/presupuestar' : '/login'"
            class="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
          >
            Solicitar Presupuesto

            <mat-icon class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform">arrow_right_alt</mat-icon>
          </a>
          <button
            disabled
            class="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Unirse como Proveedor
          </button>
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

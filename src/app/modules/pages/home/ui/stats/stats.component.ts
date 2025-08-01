import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ahorrar-stats',
  imports: [],
  template: `<section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        @for (stat of stats; track stat) {
          <div class="text-center">
            <div class="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{{ stat.number }}</div>
            <div class="text-gray-600 font-medium">{{ stat.label }}</div>
          </div>
        }
      </div>
    </div>
  </section>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent {
  stats = [
    { number: '10,000+', label: 'Proyectos Completados' },
    { number: '5,000+', label: 'Proveedores Activos' },
    { number: '98%', label: 'Satisfacción del Cliente' },
    { number: '24h', label: 'Tiempo Promedio de Respuesta' }
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ahorrar-features',
  imports: [MatIconModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir PresupuestoPro?</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            La forma más eficiente de conectar proyectos con proveedores calificados
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (feature of features; track feature) {
            <div class="text-center group">
              <div
                class="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors"
              >
                <mat-icon class="text-blue-600">{{ feature.icon }}</mat-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ feature.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
            </div>
          }
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
export class FeaturesComponent {
  features = [
    {
      icon: 'star_shine',
      title: 'Encuentra Proveedores Calificados',
      description: 'Accede a una red de proveedores verificados y especializados en tu área de necesidad.'
    },
    {
      icon: 'encrypted',
      title: 'Transacciones Seguras',
      description: 'Plataforma segura con sistema de verificación y protección para todas las transacciones.'
    },
    {
      icon: 'acute',
      title: 'Respuestas Rápidas',
      description: 'Recibe múltiples propuestas en 24-48 horas y acelera tus proyectos.'
    },
    {
      icon: 'savings',
      title: 'Mejores Precios',
      description: 'La competencia entre proveedores garantiza los mejores precios del mercado.'
    }
  ];
}

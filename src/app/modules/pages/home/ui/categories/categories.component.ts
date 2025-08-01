import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ahorrar-categories',
  imports: [NgClass],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Categorías de Servicios</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra proveedores especializados en tu área de necesidad
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          @for (category of categories; track category) {
            <div
              class="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div
                [ngClass]="category.color"
                class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
              >
                <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div class="w-4 h-4 bg-current rounded-full"></div>
                </div>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">{{ category.name }}</h3>
              <p class="text-sm text-gray-600">{{ category.description }}</p>
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
export class CategoriesComponent {
  categories = [
    {
      id: '1',
      name: 'Construcción',
      icon: 'Hammer',
      description: 'Servicios de construcción y reforma',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      name: 'Electricidad',
      icon: 'Zap',
      description: 'Instalaciones y reparaciones eléctricas',
      color: 'bg-yellow-500'
    },
    {
      id: '3',
      name: 'Verdulería',
      icon: 'Apple',
      description: 'Suministro de productos frescos',
      color: 'bg-green-500'
    },
    {
      id: '4',
      name: 'Plomería',
      icon: 'Droplets',
      description: 'Servicios de plomería y sanitarios',
      color: 'bg-cyan-500'
    },
    {
      id: '5',
      name: 'Jardinería',
      icon: 'TreePine',
      description: 'Mantenimiento de jardines y paisajismo',
      color: 'bg-emerald-500'
    },
    {
      id: '6',
      name: 'Limpieza',
      icon: 'Sparkles',
      description: 'Servicios de limpieza profesional',
      color: 'bg-purple-500'
    }
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ahorrar-cta',
  imports: [],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">¿Listo para comenzar tu próximo proyecto?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Únete a miles de usuarios que ya confían en Ahorrar para sus proyectos
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Comenzar como Cliente
          </button>
          <button
            class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Registrarse como Proveedor
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
export class CtaComponent {}

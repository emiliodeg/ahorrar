import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ahorrar-how-it-works',
  template: `
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Cómo Funciona</h2>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto">
            Proceso simple en 3 pasos para obtener el mejor presupuesto
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (step of steps; track step) {
            <div class="text-center text-white">
              <div class="text-6xl font-bold text-blue-200 mb-4">{{ step.step }}</div>
              <h3 class="text-2xl font-semibold mb-4">{{ step.title }}</h3>
              <p class="text-blue-100 leading-relaxed">{{ step.description }}</p>
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
export class HowItWorksComponent {
  steps = [
    {
      step: '01',
      title: 'Describe tu Proyecto',
      description: 'Completa un formulario detallado con los requerimientos de tu proyecto y presupuesto estimado.'
    },
    {
      step: '02',
      title: 'Recibe Propuestas',
      description: 'Los proveedores calificados envían sus mejores ofertas competitivas en 24-48 horas.'
    },
    {
      step: '03',
      title: 'Elige y Contrata',
      description: 'Compara propuestas, revisa perfiles y contrata al proveedor que mejor se adapte a tus necesidades.'
    }
  ];
}

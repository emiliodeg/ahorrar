import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SETTINGS_GLOBAL } from '@shared/providers/settings.provider';

@Component({
  selector: 'ahorrar-footer',
  imports: [],
  template: `
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h3
            class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4"
          >
            {{ settings.title }}
          </h3>
          <p class="text-gray-400 mb-6">La plataforma líder para conectar tus proyectos con los mejores proveedores</p>
          <div class="flex justify-center space-x-6 text-sm text-gray-400">
            <button disabled class="hover:text-white transition-colors">Términos de Servicio</button>
            <button disabled class="hover:text-white transition-colors">Política de Privacidad</button>
            <button disabled class="hover:text-white transition-colors">Contacto</button>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly settings = inject(SETTINGS_GLOBAL);
}

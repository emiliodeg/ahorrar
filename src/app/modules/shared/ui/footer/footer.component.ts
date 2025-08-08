import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SETTINGS_GLOBAL } from '@shared/providers/settings.provider';

@Component({
  selector: 'ahorrar-footer',
  template: `
    <footer class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">
            {{ settings.title }}
          </h3>
          <p class="mb-6">La plataforma líder para conectar tus proyectos con los mejores proveedores</p>
          <div class="flex justify-center space-x-6 text-sm">
            <button disabled>Términos de Servicio</button>
            <button disabled>Política de Privacidad</button>
            <button disabled>Contacto</button>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: `
    :host {
      display: block;
      background-color: var(--mat-sys-secondary-container);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly settings = inject(SETTINGS_GLOBAL);
}

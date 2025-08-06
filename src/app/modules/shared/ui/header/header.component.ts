import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { SETTINGS_GLOBAL } from '@shared/providers/settings.provider';
import { AuthService } from '@shared/services/auth.service';
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";
@Component({
  selector: 'ahorrar-header',
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, ThemeSwitcherComponent],
  template: `<mat-toolbar class="justify-between">
    <h1>
      <a routerLink="/" class="text-2xl font-bold text-blue-600 flex items-center gap-1"><mat-icon>savings</mat-icon>{{ settings.title }}</a>
    </h1>

    <div class="flex items-center space-x-3">
      <ahorrar-theme-switcher />
      @if (auth.hasUser()) {
        <div class="text-right">
          <p class="text-sm font-medium text-gray-900">{{ auth.getUser()?.email }}</p>
          <p class="text-xs text-gray-500 capitalize">User</p>
        </div>
        <button
          (click)="handleLogout()"
          class="flex items-center space-x-2 text-gray-500 hover:text-red-600 p-2 transition-colors"
          title="Cerrar sesión"
        >
          <mat-icon>logout</mat-icon>
        </button>
      } @else {
        <a routerLink="/login" matButton="outlined">Iniciar sesión</a>
        <a routerLink="/login" matButton="filled">Registrarse</a>
      }
    </div>
  </mat-toolbar>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly auth = inject(AuthService);
  readonly settings = inject(SETTINGS_GLOBAL);

  handleLogout() {
    throw new Error('Method not implemented.');
  }
}

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { IOptionIcon } from '@shared/models/option.model';
import { Theme, ThemeService } from '@shared/services/theme.service';

@Component({
  selector: 'ahorrar-theme-switcher',
  imports: [MatIconModule, MatMenuModule],
  template: `
    <button matButton [matMenuTriggerFor]="menu">
      <mat-icon>{{ currentIcon() }}</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      @for (option of options; track option) {
        <button mat-menu-item (click)="theme.setTheme(option.value)">
          <mat-icon>{{ option.icon }}</mat-icon>
          {{ option.label }}
        </button>
      }
    </mat-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitcherComponent {
  readonly theme = inject(ThemeService);

  currentIcon = computed(() => {
    const theme = this.theme.theme();

    return this.options.find((option) => option.value === theme)?.icon ?? this.options.at(-1)!.icon;
  });

  readonly options: IOptionIcon<Theme>[] = [
    { label: 'Claro', value: 'light', icon: 'light_mode' },
    { label: 'Oscuro', value: 'dark', icon: 'dark_mode' },
    { label: 'Sistema', value: 'light dark', icon: 'computer' }
  ];
}

import { computed, DOCUMENT, inject, Injectable, signal } from '@angular/core';

const themes = ['light dark', 'light', 'dark', ] as const;
export type Theme = (typeof themes)[number];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  #theme = signal<Theme>('light dark');

  readonly theme = computed(() => this.#theme());
  readonly document = inject(DOCUMENT);

  setTheme(theme: Theme) {
    const currentTheme = theme.includes(theme) ? theme : themes[0];

    this.#theme.set(currentTheme);

    this.document.getElementsByTagName('body')[0].style.setProperty('color-scheme', currentTheme);
  }
}

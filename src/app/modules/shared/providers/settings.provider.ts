import { InjectionToken } from '@angular/core';

interface Settings {
  title: string;
}

const settings = {
  title: 'Ahorrar'
};

export const SETTINGS_GLOBAL = new InjectionToken<Settings>('settings');

export function provideSettings(useValue: Settings = settings) {
  return {
    provide: SETTINGS_GLOBAL,
    useValue
  };
}

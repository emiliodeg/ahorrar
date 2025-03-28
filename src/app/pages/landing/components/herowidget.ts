import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'ahorrar-hero-widget',
  imports: [ButtonModule, RippleModule],
  template: `
    <div
      id="hero"
      class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
      style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
    >
      <div class="mx-6 md:mx-20 mt-0 md:mt-6">
        <h1 class="text-6xl font-bold text-gray-900 leading-tight">
          <span class="font-light block">Ahorra tu dinero</span>consiguiendo mejores presupuestos
        </h1>
        <p class="font-normal text-2xl leading-normal md:mt-4 text-gray-700">
          Carga tu presupuesto, invita a tus proveedores y te ayudamos a ahorrar
        </p>
        <button pButton pRipple [rounded]="true" type="button" class="!text-xl mt-8 !px-4">Comencemos!</button>
      </div>
      <div class="flex justify-center md:justify-end">
        <img
          src="https://primefaces.org/cdn/templates/sakai/landing/screen-1.png"
          alt="Hero Image"
          class="w-9/12 md:w-auto"
        />
      </div>
    </div>
  `
})
export class HeroWidget {}

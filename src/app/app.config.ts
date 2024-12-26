import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
   provideRouter(routes),
  //  {provide:LocationStrategy,useClass:HashLocationStrategy},
   provideHttpClient(), 
    providePrimeNG({ 
      theme: {
        preset: Aura
    }
}
)
]
};


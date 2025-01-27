import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { counterReducer } from './components/counter/store/counter.reducer';
import { addToCartReducer } from './admin-dashboard/store/admin-dash.reducer';
import { provideEffects } from '@ngrx/effects';
import { AdminDashEffects } from './admin-dashboard/store/admin-dash.effect';


export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({counter:counterReducer,AdminDashboard:addToCartReducer}),
    provideEffects([
      AdminDashEffects,
    ]),
    provideZoneChangeDetection({ eventCoalescing: true }),
   provideRouter(routes),
   provideHttpClient(), 
    providePrimeNG({ 
      theme: {
        preset: Aura
    }
}
)
]
};

// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideStore } from '@ngrx/store';
// import { routes } from './app.routes';
// import { provideHttpClient } from '@angular/common/http';
// import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';
// import { counterReducer } from './components/counter/store/counter.reducer';
// import { addToCartReducer } from './admin-dashboard/store/admin-dash.reducer';
// import { provideEffects } from '@ngrx/effects';
// import { AdminDashEffects } from './admin-dashboard/store/admin-dash.effect';


// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideStore({counter:counterReducer, adminDash: addToCartReducer }), // Use camelCase for the state slice
//     provideEffects([AdminDashEffects]),
//     provideZoneChangeDetection({ eventCoalescing: true }),
//    provideRouter(routes),
//    provideHttpClient(), 
//     providePrimeNG({ 
//       theme: {
//         preset: Aura
//     }
// }
// )
// ]
// };


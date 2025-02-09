import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import {MyPreset} from '../mytheme1';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {loaderInterceptor} from './shareds/loader/services/loader.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withInterceptors([loaderInterceptor])
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    }),
    provideRouter(routes)]
};

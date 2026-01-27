import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // Ionic routing strategy
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Ionic standalone provider
    provideIonicAngular(),

    // Router
    provideRouter(
      routes,
      withPreloading(PreloadAllModules)
    ),

    // HTTP Client (WAJIB untuk API XAMPP)
    provideHttpClient()
  ]
});

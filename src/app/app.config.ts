import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ProduitEffects } from './produit/ngrx/produit.effects';
import { produitReducer, produitFeatureKey } from './produit/ngrx/produit.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),

    provideStore({ [produitFeatureKey]: produitReducer }), // ✅ ici maintenant
    provideEffects(ProduitEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
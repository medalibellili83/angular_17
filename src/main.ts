import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ProduitEffects } from './app/produit/ngrx/produit.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { produitReducer, produitFeatureKey } from './app/produit/ngrx/produit.reducer'; // ✅

bootstrapApplication(AppComponent, appConfig);
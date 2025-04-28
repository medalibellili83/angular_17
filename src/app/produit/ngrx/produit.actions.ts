import { createAction, props } from '@ngrx/store';

export const loadProduits = createAction(
  '[Produit] Load Page',
  props<{ start: number, limit: number }>()
);

export const loadProduitsSuccess = createAction(
  '[Produit] Load Page Success',
  props<{ produits: any[] }>()
);

export const loadProduitsFailure = createAction(
  '[Produit] Load Page Failure',
  props<{ error: any }>()
);
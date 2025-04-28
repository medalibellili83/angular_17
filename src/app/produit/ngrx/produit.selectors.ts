import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProduitState, produitFeatureKey } from './produit.reducer';

export const selectProduitState = createFeatureSelector<ProduitState>(produitFeatureKey);

export const selectAllProduits = createSelector(
  selectProduitState,
  state => state.produits
);
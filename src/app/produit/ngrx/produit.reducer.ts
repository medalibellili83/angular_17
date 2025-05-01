import { createReducer, on } from '@ngrx/store';
import * as ProduitActions from './produit.actions';
import { Produit } from '../model/produit';

export const produitFeatureKey = 'produit';

export interface ProduitState {
  produits: Produit[];
  error: any;
}

export const initialState: ProduitState = {
  produits: [],
  error: null
};

export const produitReducer = createReducer(
  initialState,
  on(ProduitActions.loadProduitsSuccess, (state, { produits }) => ({
    ...state,
    produits: [...state.produits, ...produits] // ✅ concatène
  })),
  on(ProduitActions.loadProduitsFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
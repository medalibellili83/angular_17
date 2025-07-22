//gèrent les appels asynchrones

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProduitService } from '../service/produit.service';
import * as ProduitActions from './produit.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProduitEffects {
  constructor(private actions$: Actions, private produitService: ProduitService) {}

  loadProduits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProduitActions.loadProduits),
      mergeMap(({ start, limit }) =>
        this.produitService.getProduits(start, limit).pipe(
          map(produits => ProduitActions.loadProduitsSuccess({ produits })),
          catchError(error => of(ProduitActions.loadProduitsFailure({ error })))
        )
      )
    )
  );
}
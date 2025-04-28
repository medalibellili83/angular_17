import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProduitListComponent } from './produit-list/produit-list.component';
import {  StoreModule } from '@ngrx/store';
import { produitReducer, produitFeatureKey } from './ngrx/produit.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ProduitRoutingModule,
    ProduitListComponent,

  ]
})
export class ProduitModule { }
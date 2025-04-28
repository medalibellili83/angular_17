import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private API = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Produit[]> { // <-- utilise Produit ici
    return this.http.get<Produit[]>(this.API);
  }
}

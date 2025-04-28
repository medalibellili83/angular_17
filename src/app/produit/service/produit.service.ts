import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProduitService {
  private API = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) {}

  getProduits(start = 0, limit = 20): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}?_start=${start}&_limit=${limit}`);
  }
  
}
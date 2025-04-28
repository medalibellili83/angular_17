import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProduitState } from '../ngrx/produit.reducer';
import { loadProduits } from '../ngrx/produit.actions';
import { PLATFORM_ID } from '@angular/core';
import { selectAllProduits } from '../ngrx/produit.selectors';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit, OnDestroy {
  produits$!: Observable<any[]>;
  currentStart = 0;
  readonly limit = 20;
  loading = false;

  constructor(
    private store: Store<ProduitState>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.produits$ = this.store.select(selectAllProduits);
    this.loadNextPage();

    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll, true);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll, true);
    }
  }

  onScroll = (): void => {
    const bottomReached =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (bottomReached && !this.loading) {
      this.loadNextPage();
    }
  };

  private loadNextPage(): void {
    this.loading = true;
    this.store.dispatch(loadProduits({ start: this.currentStart, limit: this.limit }));
    this.currentStart += this.limit;

    // simuler fin de chargement après un court délai
    setTimeout(() => (this.loading = false), 300);
  }
}
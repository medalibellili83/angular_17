import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { Produit } from '../model/produit'; // <-- importe Produit
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css'],
})
export class ProduitListComponent implements OnInit {
  produits: Produit[] = []; // <-- utilise Produit ici

  //search
  searchControl = new FormControl('');
  filteredProduits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe((data) => {
      this.produits = data;

      //search
      this.filteredProduits = data;

      this.searchControl.valueChanges.subscribe((searchTerm) => {
        const term = searchTerm?.toLowerCase() || '';
        this.filteredProduits = this.produits.filter(
          (p) =>
            p.libelle.toLowerCase().includes(term) ||
            p.type.toLowerCase().includes(term) ||
            p.prix.toString().includes(term)
        );
      });
    });
  }
}

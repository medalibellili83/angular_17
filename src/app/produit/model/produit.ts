export class Produit {
    id: number;
    libelle: string;
    image: string;
    prix: number;
    type: string;
  
    constructor(id: number, libelle: string, image: string, prix: number, type: string) {
      this.id = id;
      this.libelle = libelle;
      this.image = image;
      this.prix = prix;
      this.type = type;
    }
  }
  
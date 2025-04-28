const fs = require('fs');

const types = [
  { type: 'liquide', count: 900000 },
  { type: 'solide', count: 1000000 },
  { type: 'vapeur', count: 150000}
];

let produits = [];
let id = 1;

types.forEach(group => {
  for (let i = 0; i < group.count; i++) {
    produits.push({
      id: id++,
      libelle: `${group.type.toUpperCase()} Produit ${i + 1}`,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehTnAOptWY65gyJ0kgMvRa6Qmn9fvLeGZlg&s',
      prix: (Math.random() * 100).toFixed(2),
      type: group.type
    });
  }
});

const data = { produits };

fs.writeFileSync('db1.json', JSON.stringify(data, null, 2));
console.log('✅ Fichier db1.json généré avec 2 050 000 produits.');

## angular_without_ngrx
npm install

# aller à la branch angular_17_without_ngrx
git checkout angular_17_without_ngrx
npm install

# run le json api server dans un line de command
json-server --watch db.json --port 3000

# run le projet angular 17 
ng serve


----------------------------------------------------------

## angular_with_ngrx
npm install

# aller à la branch angular_17_with_ngrx
git checkout angular_17_with_ngrx
npm install

# pour tester avec un json api server de 2 050 000 objets va construire une ficher db1.json de 2 050 000 objets
node node generate-db.js

# kill le port 3000 car il est déja run lors de tester angular without ngrx

# run la fichier db1.json le json api server dans un line de command
json-server --watch db1.json --port 3000

# run le projet angular 17 
ng serve




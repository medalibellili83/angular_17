## angular_without_ngrx
# Installez les dépendances :
npm install

# Basculez vers la branche angular_17_without_ngrx :
git checkout angular_17_without_ngrx

# Installez les dépendances :
npm install

# Lancez le serveur JSON API :
json-server --watch db.json --port 3000

# Démarrez le projet Angular 17 :
ng serve


----------------------------------------------------------

## angular_with_ngrx

# Installez les dépendances :
npm install

# Basculez vers la branche angular_17_with_ngrx :
git checkout angular_17_with_ngrx

# Installez les dépendances :
npm install

# Pour tester avec un fichier JSON de 2 050 000 objets, exécutez :
node node generate-db.js

# Si le port 3000 est déjà utilisé (par le test précédent), tuez le processus :
kill-port 3000


# Lancez le serveur JSON API avec le nouveau fichier db1.json :
json-server --watch db1.json --port 3000

# run le projet angular 17 
ng serve




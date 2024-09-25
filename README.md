# Gestion Recette API
Cette API permet de gérer des recettes avec des opérations de création, de lecture, de mise à jour et de suppression (CRUD).


## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [MySQL](https://dev.mysql.com/downloads/installer/) (version 5.7 ou supérieure)
- Un outil de gestion de requêtes API comme [Postman](https://www.postman.com/) ou `curl`.


## Endpoints de l'API


Méthode	Endpoint------------------------------Description

- GET	/api/recettes---------------------Récupère la liste de toutes les recettes.
- GET	/api/recettes/:id-----------------Récupère les détails d'une recette par ID.
- POST	/api/recettes---------------------------Crée une nouvelle recette.

- PUT	/api/recettes/:id-------------------------Met à jour une recette par ID.

- DELETE	/api/recettes/:id-------------------Supprime une recette par ID.
## Exemples de requêtes
- Récupérer toutes les recettes
```
http://localhost:3000/api/recettes
```
- Créer une nouvelle recette
```
http://localhost:3000/api/recettes \
```
- Mettre à jour une recette

```
http://localhost:3000/api/recettes/1 \
```
- Supprimer une recette
```
http://localhost:3000/api/recettes/1
```
## Installation

- Clonez le dépôt sur votre machine locale :

    ```bash
git clone https://github.com/username/gestion-recette-api.git
```
```
cd gestion-recette-api
```
- Installer les dépendances
```
npm install
```
- Configurer l'environnement
Créez un fichier .env à la racine du projet et ajoutez les configurations nécessaires (par exemple, pour la base de données).

- Exemple .env :
```
DB_HOST=localhost
DB_DATABASE=database_name
DB_USERNAME=username
DB_PASSWORD=password
```
- Démarrer le projet

```
npm start
```
L'API sera accessible à [http://localhost:3000](http://localhost:3000)

- Exécution des tests unitaires
Installer les dépendances de test
Assurez-vous que jest ou un autre framework de test est installé :

bash
Copier le code
npm install --save-dev jest
Exécuter les tests
Lancez les tests avec la commande suivante :
```
npm test
```
- Construction et lancement du conteneur Docker

```
docker build --pull --rm -f "dockerfile" -t gestionrecetteapi:latest 
```
- Lancer le conteneur
Une fois l'image construite, vous pouvez lancer le conteneur avec la commande suivante :

```
docker run -d -p 3000:80 gestionrecetteapi:latest
```
L'application sera disponible à http://localhost:3000.


## Auteur

Projet réalisé en binôme par [Ehya Agg](https://github.com/Ehya-Ag) et [Ethman Ly](https://github.com/OusmaneLyDev).

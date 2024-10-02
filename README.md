

# Gestion Recette API

Cette API permet de gérer des recettes avec des opérations de création, de lecture, de mise à jour et de suppression (CRUD).

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [MySQL](https://dev.mysql.com/downloads/installer/) (version 5.7 ou supérieure)
- Un outil de gestion de requêtes API comme [Postman](https://www.postman.com/) ou `curl`.

## Endpoints de l'API

**Récupérer toutes les recettes**

- Méthode : GET
- Endpoint : /api/recettes
- Description : Récupère la liste de toutes les recettes.

Exemple de requête :

```
GET http://localhost:3001/api/recettes
```

**Récupérer une recette par ID**

- Méthode : GET
- Endpoint : /api/recettes/:id
- Description : Récupère les détails d'une recette spécifique en fonction de son ID.

Exemple de requête :

```
GET http://localhost:3001/api/recettes/1
```

**Créer une nouvelle recette**

- Méthode : POST
- Endpoint : /api/recettes
- Description : Crée une nouvelle recette avec les données fournies dans le corps de la requête.

Exemple de requête :

```
POST http://localhost:3001/api/recettes

{
  "nom": "Pancakes",
  "ingredients": "Farine, lait, œufs",
  "type": "plat"
}
```
**Mettre à jour une recette par ID**

- Méthode : PUT
- Endpoint : /api/recettes/:id
- Description : Met à jour une recette spécifique en fonction de son ID

Exemple de requête :

```
PUT http://localhost:3001/api/recettes/1


 {
        "titre": "nouvelle recette5",
        "ingredient": "Pâte brisée, Lardons",
        "type": "plat"
 }
```
**Supprimer une recette par ID**

- Méthode : PUT
- Endpoint : /api/recettes/:id
- Description : Supprime une recette spécifique en fonction de son ID.

Exemple de requête :

```
DELETE http://localhost:3001/api/recettes/1
```

## Installation

- Clonez le dépôt sur votre machine locale :

```
https://github.com/OusmaneLyDev/gestion_api_recettes.git
```

```
cd gestion-api_recette
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

L'API sera accessible à [http://localhost:3001](http://localhost:3001)

- Exécution des tests unitaires


Exécuter les tests
Lancez les tests avec la commande suivante :

```
npm test
```

- Construction et lancement du conteneur Docker

```
docker compose -f "docker-compose.yml" up -d --build
```

- Lancer le conteneur
  Une fois l'image construite, vous pouvez lancer le conteneur avec la commande suivante :

```
docker run -d -p 3001:80 gestion_recette_api:latest
```

L'application sera disponible à http://localhost:3001.

## Image DockerHub

Vous pouvez accéder à l'image DockerHub [ici](https://hub.docker.com/r/lyouse/gestion_recette_api).

## Auteur

[Ethman Ly](https://github.com/OusmaneLyDev).

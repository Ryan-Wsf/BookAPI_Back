# Introduction
Dans ce cours, nous allons apprendre a concevoir un back office en utilisant une architecture API REST avec node.js, express, mysql et squelize. Nous allons construire un mini-projet de gestion de bibliothèque pour illustrer les concepts clés.

# Projets : Système de gestion de bibliotèque
Notre système permettra de :
* Gérer les livres (ajouter, modifier, supprimer)
* Associer des livres a des auteurs

# Configuration de l'environnement de travail
##  Installation des dépendances
Dans le terminal, vous allez entrer les commandes :
```
npm init -y
npm install express mysql2 sequelize dotenv
npm install --save-dev nodemon

```
## Structure du projet

```
cours_back-end/
├── src/
|   ├── config/
|   |     └── database.js
|   ├── models/
|   |     ├── index.js
|   |     ├── book.js
|   |     └── author.js
|   ├── controllers/
|   |     ├── bookController.js
|   |     └── autheurController.js
|   ├── routes/
|   |     ├── bookRoutes.js
|   |     └── authorRoutes.js
|   ├── middlewares/
|   |     └── errorHandler.js
|   ├── app.js
├── .env
├── package.json

```


// Importation des modules nécessaires

// Express est utilisé pour créer le serveur et définir les routes HTTP.
const express = require('express');

// Importation des fichiers de routes pour les livres et les auteurs.
// Ces fichiers contiennent les définitions des routes associées aux opérations CRUD sur les livres et les auteurs.
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

// Importation du middleware de gestion des erreurs.
// Ce middleware sera utilisé pour intercepter et gérer les erreurs à travers l'application.
const errorHandler = require('./middlewares/errorHandler');

// Importation de l'instance Sequelize pour gérer la connexion à la base de données.
const sequelize = require('./config/database');

// Création de l'application Express.
const app = express();

// Middleware pour parser le corps des requêtes HTTP en JSON.
// Cela permet de recevoir et traiter les données au format JSON dans les requêtes (par exemple, via POST ou PUT).
app.use(express.json());

// Définition des routes de l'application
// Toutes les requêtes commençant par '/api/books' seront gérées par les routes définies dans 'bookRoutes'.
// Exemple : http://localhost:3000/api/books
app.use('/api/books', bookRoutes);

// Toutes les requêtes commençant par '/api/authors' seront gérées par les routes définies dans 'authorRoutes'.
// Exemple : http://localhost:3000/api/authors
app.use('/api/authors', authorRoutes);

// Gestion des erreurs
// Ce middleware capture et gère les erreurs rencontrées dans l'application.
// Il est placé à la fin pour s'assurer que toutes les erreurs non gérées dans les autres routes seront interceptées ici.
app.use(errorHandler);

// Définition du port sur lequel le serveur écoutera
// Utilisation de la variable d'environnement PORT si elle est définie, sinon le serveur écoute sur le port 3000 par défaut.
const PORT = process.env.PORT || 3000;

// Synchronisation avec la base de données et démarrage du serveur
// sequelize.sync() synchronise tous les modèles avec la base de données.
// Une fois la synchronisation réussie, le serveur Express est lancé et commence à écouter sur le port spécifié.
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

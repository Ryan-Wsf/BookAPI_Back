// Importation des types de données de Sequelize
const { DataTypes } = require('sequelize');

// Importation de l'instance sequelize configurée
const sequelize = require('../config/database');

// Définition du modèle 'Book' (Livre) avec Sequelize
// La fonction define() de Sequelize est utilisée pour créer un modèle appelé 'Book' qui sera associé à une table 'Books' dans la base de données.
// Le premier argument ('Book') est le nom du modèle, et le second argument est un objet qui définit les colonnes et leurs types dans la table.

const Book = sequelize.define('Book', {
    // Colonne 'title' (titre)
    // Cette colonne est de type STRING (chaîne de caractères) et est obligatoire (allowNull: false).
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Colonne 'isbn' (International Standard Book Number)
    // Cette colonne est également de type STRING, mais elle peut être null (allowNull: true).
    isbn: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // Colonne 'publishedYear' (année de publication)
    // Cette colonne est de type INTEGER (nombre entier) et représente l'année de publication du livre.
    publishedYear: {
        type: DataTypes.INTEGER
    }
});

// Exportation du modèle 'Book' pour qu'il puisse être utilisé dans d'autres parties de l'application
module.exports = Book;


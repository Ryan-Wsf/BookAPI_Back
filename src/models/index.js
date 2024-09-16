// Importation des modèles 'Book' et 'Author'
// Ces modèles représentent les tables 'Books' et 'Authors' dans la base de données.
const Book = require('./book');
const Author = require('./author');

// Définition des relations entre les modèles

// Relation : Un livre (Book) appartient à un seul auteur (Author).
// Cela crée une clé étrangère 'authorId' dans la table 'Books', qui fait référence à l'ID de l'auteur.
// Cette relation est définie avec belongsTo(), ce qui signifie qu'un livre ne peut être lié qu'à un seul auteur.
Book.belongsTo(Author);

// Relation : Un auteur (Author) peut avoir plusieurs livres (Books).
// Cette relation est définie avec hasMany(), ce qui signifie qu'un auteur peut être lié à plusieurs livres.
// Cela indique que l'auteur est la clé primaire et que plusieurs livres peuvent être associés à cet auteur.
Author.hasMany(Book);

// Exportation des modèles pour qu'ils puissent être utilisés ailleurs dans l'application
module.exports = {
    Book,
    Author
};

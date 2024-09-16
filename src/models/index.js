const Book = require('./book');
const Author = require('./author');

// Define the relationships

// Un livre peux avoir un seul auteur
Book.belongsTo(Author);
// L'auteur peux avoir plusieurs livres
Author.hasMany(Book);

module.exports = {
    Book,
    Author
};
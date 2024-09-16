const { Book, Author } = require('../models');

exports.createBook = async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        // 201 Created
        res.status(201).json(book);
    } catch (error) {
        next(error)
    }
}

// Meme si on n'appel pas req, on doit le mettre pour que express fonctionne correctement
exports.getAllBooks = async (req, res, next) => {
    try {
        // SELECT * FROM Books LEFT JOIN autors On books.authorId = authors.id;
        const books = await Book.findAll({ include : Author });
        // 200 OK
        res.status(200).json(books);
    } catch (error) {
        next(error)
    }
}
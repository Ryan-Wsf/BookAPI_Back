const { Book, Author } = require('../models');

exports.createBook = async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
}

exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.findAll({ include: Author });
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
}

exports.getOneBook = async (req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id, { include: Author });
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
}

exports.updateBook = async (req, res, next) => {
    try {
        await Book.update(req.body, { where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        next(error);
    }
}

exports.deleteBook = async (req, res, next) => {
    try {
        await Book.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        next(error);
    }
}

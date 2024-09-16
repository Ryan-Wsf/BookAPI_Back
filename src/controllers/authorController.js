const { Author } = require('../models');

exports.createAuthor = async (req, res, next) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (error) {
        next(error)
    }
}

exports.getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch (error) {
        next(error)
    }
}

exports.getOneAuthor = async (req, res, next) => {
    try {
        const author = await Author.findByPk(req.params.id);
        res.status(200).json(author);
    } catch (error) {
        next(error)
    }
}

exports.updateAuthor = async (req, res, next) => {
    try {
        await Author.update(req.body, { where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        next(error)
    }
}

exports.deleteAuthor = async (req, res, next) => {
    try {
        await Author.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        next(error)
    }
}


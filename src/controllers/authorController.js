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
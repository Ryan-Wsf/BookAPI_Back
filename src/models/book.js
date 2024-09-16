const { dataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
    title: {
        type: dataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: dataTypes.STRING,
        allowNull: true
    },
    publishedYear: {
        type: dataTypes.INTEGER
    }
});

module.exports = Book;

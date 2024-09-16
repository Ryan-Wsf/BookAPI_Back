const { dataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Author = sequelize.define('Author', {
    name: {
        type: dataTypes.STRING,
        allowNull: false
    },
    birthYear: {
        type: dataTypes.INTEGER
    }
});

module.exports = Author;
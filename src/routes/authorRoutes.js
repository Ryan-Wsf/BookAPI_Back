const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/', authorController.getAllAuthors);
router.post('/add', authorController.createAuthor);
router.get('/:id', authorController.getOneAuthor);
router.patch('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;
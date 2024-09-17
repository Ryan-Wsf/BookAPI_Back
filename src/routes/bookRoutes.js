const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/auth');

router.get('/', bookController.getAllBooks);
router.post('/add', authMiddleware,  bookController.createBook);
router.get('/:id', bookController.getOneBook);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;

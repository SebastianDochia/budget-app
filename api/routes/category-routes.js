const express = require('express');
const { addCategory, getAllCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');

const router = express.Router();

router.post('/categories', addCategory);
router.get('/categories', getAllCategories);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);


module.exports = {
    routes: router
}
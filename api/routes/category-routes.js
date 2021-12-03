const express = require('express');
const { addCategory, getAllCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');

const router = express.Router();

router.post('/categories', addCategory);
router.get('/categories', getAllCategories);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);


module.exports = {
    routes: router
}
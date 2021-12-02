const express = require('express');
const { addExpense, getAllExpenses, getExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');

const router = express.Router();

router.post('/expenses', addExpense);
router.get('/expenses', getAllExpenses);
router.get('/expense/:id', getExpense);
router.put('/expense/:id', updateExpense);
router.delete('/expense/:id', deleteExpense);


module.exports = {
    routes: router
}
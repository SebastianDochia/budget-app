const express = require('express');
const { addExpense, getAllExpenses, getExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');

const router = express.Router();

router.post('/expenses', addExpense);
router.get('/expenses', getAllExpenses);
router.get('/expenses/:id', getExpense);
router.put('/expenses/:id', updateExpense);
router.delete('/expenses/:id', deleteExpense);


module.exports = {
    routes: router
}
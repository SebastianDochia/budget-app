'use strict';

const firebase = require('../db');
const Expense = require('../models/expense');
const firestore = firebase.firestore();

const addExpense = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('expenses').doc().set(data);
        res.send('Expense saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllExpenses = async (req, res, next) => {
    try {
        const expenses = await firestore.collection('expenses');
        const data = await expenses.get();
        const expensesArray = [];
        if(data.empty) {
            res.status(404).send('No expense found');
        }else {
            data.forEach(doc => {
                const expense = new Expense(
                    doc.id,
                    doc.data().name,
                    doc.data().vale,
                    doc.data().date,
                    doc.data().class,
                    doc.data().category,
                );
                expensesArray.push(expense);
            });
            res.send(expensesArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getExpense = async (req, res, next) => {
    try {
        const id = req.params.id;
        const expense = await firestore.collection('expense').doc(id);
        const data = await expense.get();
        if(!data.exists) {
            res.status(404).send('Expense with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateExpense = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const expense =  await firestore.collection('expenses').doc(id);
        await expense.update(data);
        res.send('Expense updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteExpense = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('expenses').doc(id).delete();
        res.send('Expense deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addExpense,
    getAllExpenses,
    getExpense,
    updateExpense,
    deleteExpense,
}
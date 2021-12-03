'use strict';

const firebase = require('../db');
const Category = require('../models/category');
const firestore = firebase.firestore();


const addCategory = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('categories').doc().set(data);
        res.status(200).send('Category saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllCategories = async (req, res, next) => {
    try {
        const categories = await firestore.collection('categories');
        const data = await categories.get();
        const categoriesArray = [];
        if(data.empty) {
            res.status(404).send('No category found');
        }else {
            data.forEach(doc => {
                const category = new Category(
                    doc.id,
                    doc.data().body.name,
                );
                categoriesArray.push(category);
            });
            res.send(categoriesArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const category =  await firestore.collection('categories').doc(id);
        await category.update(data);
        res.send('Category updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('categories').doc(id).delete();
        res.send('Category deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addCategory,
    getAllCategories,
    updateCategory,
    deleteCategory,
}
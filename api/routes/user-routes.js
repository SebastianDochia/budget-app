const express = require('express');
const { addUser, getUser } = require('../controllers/userController');

const router = express.Router();

router.post('/users', addUser);
router.get('/users/:id', getUser);


module.exports = {
    routes: router
}
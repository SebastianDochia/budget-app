const firebase = require('../db');
const firestore = firebase.firestore();
const faker = require('faker');

const seedDB = () => {
    try {
        [...Array(10).keys()].map(() =>
            firestore.collection('expenses').add({
                body: {
                    name: faker.commerce.productName(),
                    value: faker.datatype.number().toString(),
                    date: faker.date.past().toLocaleDateString().replace(/\//g, '-'),
                    category: 'Fakes'
                }
            })
        );
        console.log('database seed was successful');
    } catch (error) {
        console.log(error, 'database seed failed');
    }
}

module.exports = {
    seedDB
}
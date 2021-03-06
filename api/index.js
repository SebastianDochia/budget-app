'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const userRoutes = require('./routes/user-routes');
const categoryRoutes = require('./routes/category-routes');
const expenseRoutes = require('./routes/expense-routes');

const seeder = require('./utils/db-seeder');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.use('/api', categoryRoutes.routes);
app.use('/api', expenseRoutes.routes);

seeder.seedDB();


app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));

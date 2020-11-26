const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./routes/index');
const clientsRouter = require('./routes/clients');
const servicesRouter = require('./routes/services');

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/clients', clientsRouter);
app.use('/services', servicesRouter);

app.listen(4000);
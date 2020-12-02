const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

const indexRouter = require('./routes/index');
const clientsRouter = require('./routes/clients');
const servicesRouter = require('./routes/services');
const profissionalRouter = require('./routes/profissional');

app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/clients', clientsRouter);
app.use('/services', servicesRouter);
app.use('/profissional', profissionalRouter);

app.listen(4000);
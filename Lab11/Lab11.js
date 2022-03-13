const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutas_lab11 = require('./routes/lab11.routes');
app.use('/', rutas_lab11);


app.listen(3000);
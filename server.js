const express = require('express');
const app = express();
const router = require('./routes/index');
const connectDB = require('./database/db');
require('dotenv').config();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.set('view engine', 'ejs');
app.use(express.static('public'));

connectDB();
app.use('/', router);

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});

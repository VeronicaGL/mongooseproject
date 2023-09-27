require('dotenv').config();
const express = require ('express');
const app = express(); 

require('./config/db.config.js');



app.listen(3000, () => console.log('Dabuti'));
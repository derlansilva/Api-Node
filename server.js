const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
const connection = require('./src/database/database');

const app = express();
app.use(express.json());
app.use(cors())

connection
    .authenticate()
    .then(()=>{
        console.log("Conectado")
    }).catch((error) => {
        console.log(error);
    })

requireDir('./src/models');

app.use('/api' , require('./src/routes'));

app.listen(8080);
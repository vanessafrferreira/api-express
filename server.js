const express = require('express');
const API = 3412
const app = express();
const filmes = require('./src/data/filmes.json');
app.get('/filmes',(req, res) => {
    return res.json(filmes)
});

app.listen(API, () => {

    console.log("servidor funcionando",API)
})

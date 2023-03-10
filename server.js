const express = require('express');
const API = 3412
const app = express();
app.get('/vanessa',(req, res) => {
    return res.json({ mensagem: "api funcionando" })
});

app.listen(API, () => {

    console.log("servidor funcionando",API)
})

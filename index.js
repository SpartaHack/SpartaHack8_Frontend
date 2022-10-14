const express = require('express');
const PORT = 4000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/materials'));


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT)
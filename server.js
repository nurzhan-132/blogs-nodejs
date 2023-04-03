const express = require('express');

const app = express();


app.use(express.static(__dirname + '/public'))
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/auth', (req, res) => {
    res.render('auth')
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
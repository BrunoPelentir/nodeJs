var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('../views/home');
});

app.get('/index', function(req, res) {
    res.render('../views/home');
});

app.get('/page1', function(req, res) {
    res.render('../views/pagina1');
});

app.listen(3000, function(){
    console.log('Executando na porta 3000')
});


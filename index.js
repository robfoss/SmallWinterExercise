const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const port = 4023
const host = '127.0.0.1'

const randomNum = Math.floor(Math.random() * 100);

app.get('/', (req, res) => {
    if(randomNum >= 50){
        res.render('heads')
    } else {
        res.render('tails')
    }
    
});

app.get('/heads', (req, res) =>{
    res.render('heads')
});

app.get('/tails', (req, res) =>{
    res.render('tails')
});






server.listen(port, host, ()=>{
    console.log('Swag')
})
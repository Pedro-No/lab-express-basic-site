const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/home',(request, response, next) => {
    response.sendFile(__dirname + '/views/main.html');
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/aboutus.html');
})

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
})

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html');
})


app.listen(6969, ()=> console.log('PORT 6969'))

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { response } = require('express');
require('dotenv').config();

const app = express();


//Si quiero que las paginas las renderice en el servidor como lo hace next.js, gatsby js o angular universal, en node js utilizo handlebars o HBS:
// Handlebars busca la vistas en la carpeta views
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Habilitar directorio publico:
app.use(express.static('public'));

/********* CON HBS O HANDLEBARS ************/
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Andres Felipe Saumet',
        titulo: 'Curso de Node'
    });

});

app.get('/elements', (req, res) => {

    res.render('elements', {
        titulo: 'Elements - Road Trip by TEMPLATED'
    })
});

app.get('/generic', (req, res) => {

    res.render('generic', {
        titulo: 'Generic - Road Trip by TEMPLATED'
    })
});



/********* FORMA DE TRABAJAR EN NODE SIN HBS O HANDLEBARS ************/

// app.get('/', (req, res = response) => {
//     res.sendFile(path.resolve(__dirname, 'public/index.html'));

// });

// app.get('/generic', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public/generic.html'));
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public/elements.html'));
// });


// app.get('*', (req, res = response) => {
//     // res.send('Error | 404 Page Not Found');
//     res.sendFile(path.resolve(__dirname, 'public/404.html'))
// });

// // Esta es la forma de enviar contenido escrito en NODE.
// app.get('/main', (req, res = response) => {
//     res.send('Desde el Main');
// });


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
});
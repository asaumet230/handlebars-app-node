//Esta es la forma nativa de NODE para crear un web server:

const http = require('http');

http.createServer((req, res) =>{

    // res.writeHead(200, { 'Content-type':'text/plain' }) //Esta es la forma nativa de mandar una respuesta por los headers.


    // const persona = {
    //     id:1,
    //     nombre: 'Andres Felipe'
    // }
    // res.write(JSON.stringify(persona));
    // res.end();


    /********* OTRO EJEMPLO: ***********/
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-type':'application/csv' });

    res.write(`id, nombre\n`);
    res.write(`1, laura\n`);
    res.write(`2, luciana\n`);
    res.write(`3, andres felipe\n`);
    res.write(`4, patricia\n`);
    res.write(`5, humberto\n`);
    res.end();

}).listen(8080);


console.log('Escuchando en el puerto', 8080);


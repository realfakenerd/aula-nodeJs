const http = require('http');
const app = require('express');

app.listen(3000, function () {
    console.log('Escutando na porta 3000');
});

app.get('/', function (req, resp) {
    resp.send(`
    <html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1> Casa do Código </h1>
    </body> 
    </html>
`)
})
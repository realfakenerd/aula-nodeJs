const BooksDao = require('../infra/BooksDao');
const db = require('../../config/database');
module.exports = (app) => {
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
    app.get('/livros', function (req, resp) {
        const booksDao = new BooksDao(db);

        booksDao.list()
            .then((livros) => resp.marko(
                require('../views/books/lista/lista.marko'),
                {
                    livros: result
                }
            )).catch((err) => console.log(err)
            )
    })
}
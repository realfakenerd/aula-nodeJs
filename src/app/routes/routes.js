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
    });
    app.get('/livros', (req, resp) => {
        const booksDao = new BooksDao(db);

        booksDao.list()
            .then((livros) => resp.marko(
                require('../views/books/lista/lista.marko'),
                {
                    livros
                }
            )).catch((err) => console.log(err)
            )
    });
    app.get('/livros/form', (req, resp) => resp.marko(require('../views/books/forms/form.marko')));
    app.post('/livros', (req, resp) => console.log(req.body));
}
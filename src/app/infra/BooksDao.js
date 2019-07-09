class BooksDao {
    constructor(db) {
        this._db = db
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO LIVROS (
                        titulo,
                        preco,
                        descricao
                    ) values (?, ?, ?)
            `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro')
                    }
                    resolve();
                }
            )
        });
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (err, result) => {
                    if (err) return reject('Não foi possível os livros');
                    return resolve(result);
                }
            )
        });
    }
}

module.exports = BooksDao;
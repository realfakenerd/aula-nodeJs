class BooksDao {
    constructor(db) {
        this._db = db
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
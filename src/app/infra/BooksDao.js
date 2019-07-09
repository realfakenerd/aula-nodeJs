class BooksDao {
    constructor(db) {
        this._db = db
    }

    list(callback) {
        this._db.all(
            'SELECT * FROM livros', (err, result) => callback(err, result)
        )
    }
}
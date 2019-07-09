let bookTable = document.querySelector('#livros');
bookTable.addEventListener('click', (event) =>{
    let clickedElement = event.target;
    if(clickedElement.dataset.type == 'remocao'){
        let bookId = clickedElement.dataset.ref;
        fetch(`http://localhost:3000/livros/${bookId}`, {method: 'DELETE'})
            .then((resp) => {
                let tr = clickedElement.closest(`#livro_${bookId}`)
                tr.remove();
            }).catch((err) => console.log(err));
    }
})
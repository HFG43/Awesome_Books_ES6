export function removeBook(event) {
    const bookIndex = event.target.dataset.index;
    
    this.books.splice(bookIndex, 1);
    localStorage.setItem('book', JSON.stringify(this.books));
    this.displayBooks();
  }
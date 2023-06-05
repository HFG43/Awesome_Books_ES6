import Book from "./book";

export function addBooks(event) {
  event.preventDefault();
  const title = this.inputTitle.value;
  const author = this.inputAuthor.value;
  if (title !== '' && author !== '') {
    const book = new Book(Date.now(), title, author);
    this.books = [book, ...this.books];
    localStorage.setItem('book', JSON.stringify(this.books));
  }
  this.displayBooks();
  this.inputAuthor.value = '';
  this.inputTitle.value = '';
}
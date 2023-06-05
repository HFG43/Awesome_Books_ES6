import addBooks from './addBook.js';
import displayBooks from './displayBooks.js';
import attachRemoveButtonListeners from './addRemoveListener.js';
import removeBook from './removeBook.js';

class BookList {
    constructor() {
      this.bookList = document.getElementById('book-list');
      this.inputTitle = document.getElementById('title');
      this.inputAuthor = document.getElementById('author');
      this.inputButton = document.getElementById('add-button');
      this.listButton = document.getElementById('contact-section');
      this.newButton = document.getElementById('form-section');
      this.books = JSON.parse(localStorage.getItem('book')) || [];
      this.inputButton.addEventListener('click', (event) => this.addBooks(event));
      this.displayBooks();
  
      this.listLink = document.getElementById('list');
      this.addLink = document.getElementById('new');
      this.contactLink = document.getElementById('contact');
  
      this.listLink.addEventListener('click', () => this.showSection('div-list'));
      this.addLink.addEventListener('click', () => this.showSection('form-section'));
      this.contactLink.addEventListener('click', () => this.showSection('contact-section'));
  
      this.displayDate();
    }

    addTheBook () {
      addBooks();
    }

    showBook () {
      displayBooks();
    }

    identifyRemoveButton () {
      attachRemoveButtonListeners();
    }

    deleteBook () {
      removeBook();
    }

    
  showSection = (sectionId) => {
    const sections = document.getElementsByClassName('list-section');

    for (let i = 0; i < sections.length; i += 1) {
      const content = sections[i];
      if (content.id === sectionId) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    }
  }

}

const bookList = new BookList();
bookList.displayBooks();
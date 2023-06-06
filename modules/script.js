import Book from './book.js';
// import  from './sections.js';

const listButton = document.getElementById('list');
const listSection = document.getElementById('book-list');
listButton.addEventListener('click', () => {
    listSection.classList.remove('hidden');
    newSection.classList.add('hidden');
    contactSection.classList.add('hidden');
});

const newButton = document.getElementById('new');
const newSection = document.getElementById('form-section');
newButton.addEventListener('click', () => {
   newSection.classList.remove('hidden');
   listSection.classList.add('hidden');
   contactSection.classList.add('hidden');
});

const contactButton = document.getElementById('contact');
const contactSection = document.getElementById('contact-section');
contactButton.addEventListener('click', () => {
    contactSection.classList.remove('hidden');
    newSection.classList.add('hidden');
    listSection.classList.add('hidden');
});

class BookList {
  constructor() {
    this.bookList = document.getElementById('book-list');
    this.inputTitle = document.getElementById('title');
    this.inputAuthor = document.getElementById('author');
    this.inputButton = document.getElementById('add-button');
    this.books = JSON.parse(localStorage.getItem('book')) || [];
    this.inputButton.addEventListener('click', (event) => this.addBooks(event));
    this.displayBooks();

    this.listLink = document.getElementById('list');
    this.addLink = document.getElementById('new');
    this.contactLink = document.getElementById('contact');

    this.displayDate();
  }

  addBooks(event) {
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

  displayDate = () => {
    const dateElement = document.getElementById('date');

    const updateTime = () => {
      const today = new Date();
      const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      const format = today.toLocaleTimeString('en-US', options);

      dateElement.textContent = format;
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  displayBooks() {
    this.bookList.innerHTML = '';
    const list = document.createElement('ul');
    list.classList.add('list-container');

    for (let i = 0; i < this.books.length; i += 1) {
      const book = this.books[i];

      const listItem = document.createElement('li');

      const booksInfo = document.createElement('span');
      booksInfo.textContent = `${book.title} by ${book.author}`;
      listItem.appendChild(booksInfo);
      const removeButoon = document.createElement('button');
      removeButoon.id = `remove-button-${this.books[i].id}`;

      removeButoon.textContent = 'remove';
      removeButoon.setAttribute('data-index', i);

      listItem.appendChild(removeButoon);
      list.appendChild(listItem);
    }
    this.bookList.appendChild(list);
    this.attachRemoveButtonListeners();
  }

  attachRemoveButtonListeners() {
    const removeButtons = document.querySelectorAll("button[id^='remove-button-']");
    removeButtons.forEach((button) => {
      button.addEventListener('click', this.removeBook.bind(this));
    });
  }

  removeBook(event) {
    const bookIndex = event.target.dataset.index;
    this.books.splice(bookIndex, 1);
    localStorage.setItem('book', JSON.stringify(this.books));
    this.displayBooks();
  }
}

const bookList = new BookList();
bookList.displayBooks();

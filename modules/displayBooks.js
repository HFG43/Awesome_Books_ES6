export function displayBooks() {
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
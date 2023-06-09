const listButton = document.getElementById('list');
const listSection = document.getElementById('book-list');
const newButton = document.getElementById('new');
const newSection = document.getElementById('form-section');
const contactButton = document.getElementById('contact');
const contactSection = document.getElementById('contact-section');

listButton.addEventListener('click', () => {
  listSection.classList.remove('hidden');
  newSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

newButton.addEventListener('click', () => {
  newSection.classList.remove('hidden');
  listSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

contactButton.addEventListener('click', () => {
  contactSection.classList.remove('hidden');
  newSection.classList.add('hidden');
  listSection.classList.add('hidden');
});

export {
  listButton, listSection, newButton, newSection, contactButton, contactSection,
};
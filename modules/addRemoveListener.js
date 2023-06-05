export function attachRemoveButtonListeners() {
    const removeButtons = document.querySelectorAll("button[id^='remove-button-']");
    removeButtons.forEach((button) => {
      button.addEventListener('click', this.removeBook.bind(this));
    });
  }

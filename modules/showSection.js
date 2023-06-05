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
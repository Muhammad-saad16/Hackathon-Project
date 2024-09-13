function toggleSection(sectionId, button) {
    var section = document.getElementById(sectionId);
    var content = section.querySelector('div'); // Get the div inside the section
    if (content.style.display === 'none') {
      content.style.display = 'block';
      button.textContent = 'Hide';
    } else {
      content.style.display = 'none';
      button.textContent = 'Show';
    }
  }
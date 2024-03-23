/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const courseOfferings = document.querySelectorAll('.course-offerings');
  const expandedOfferings = document.querySelectorAll('.expanded-offerings');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const programId = this.getAttribute('data-program');
      const offerings = courseOfferings[programId - 1];
      const expanded = expandedOfferings[programId - 1];
    
      // Collapse any other expanded sections that are currently open
  document.querySelectorAll('.expanded-offerings').forEach(section => {
      if (section !== expandedOfferings) {
        section.classList.remove('active');
        section.style.display = 'none';
      }
    });
      // Toggle the display of the expanded section
      if (expanded.style.display === 'none') {
        expanded.classList.add('active');
        expanded.style.display = 'block';
      } else {
        expanded.classList.remove('active');
        expanded.style.display = 'none';
      }
    });
  });
});
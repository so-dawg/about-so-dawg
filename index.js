// Toggle dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  
  // Toggle dropdown on button click
  dropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
  });
  
  // Close dropdown when clicking elsewhere
  document.addEventListener('click', function(e) {
    if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.classList.remove('show');
    }
  });

  // Smooth scroll on dropdown link click
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        dropdownContent.classList.remove('show');
      }
    });
  });
});
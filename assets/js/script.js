document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.getElementById('themeToggler');
  const htmlTag = document.documentElement;
  const sunIcon = document.querySelector('.bi-sun-fill');
  const moonIcon = document.querySelector('.bi-moon-stars-fill');

  toggler.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-bs-theme');

    if (currentTheme === 'light') {
      htmlTag.setAttribute('data-bs-theme', 'dark');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      htmlTag.setAttribute('data-bs-theme', 'light');
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  });
});

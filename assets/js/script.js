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

const avatar = document.getElementById("avatar");

const professional = "../assets/img/Profile.png";
const wacky = "../assets/img/wacky.png";

avatar.addEventListener("mouseenter", () => {
  avatar.src = wacky;
});

avatar.addEventListener("mouseleave", () => {
  avatar.src = professional;
});


document.querySelectorAll('.uiworks-custom').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById('modalImage').src = this.src;
    });
});



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


function updateClock() {
    const now = new Date();
    
    // Get the short weekday name (e.g., "Fri")
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = days[now.getDay()];
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    
    // Add leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    // Combine into your exact format
    const timeString = `${dayName} ${hours}:${minutes} ${ampm} Manila, PH`;
    
    // Update the HTML text
    document.getElementById('clock').textContent = timeString;
}

// Start the clock immediately and update it every second to keep it accurate
updateClock();
setInterval(updateClock, 1000);
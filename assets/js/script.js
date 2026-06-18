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

/*hover*/
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

document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', function () {
        document.getElementById('modalImage').src = this.dataset.certImg;
    });
});

/*clock*/
function updateClock() {
            const now = new Date();
            
            // Format options to match "Saturday 5:55 PM"
            const options = { 
                weekday: 'long', 
                hour: 'numeric', 
                minute: '2-digit', 
                hour12: true 
            };
            
            // Generate the formatted string based on the user's local time
            const timeString = now.toLocaleDateString('en-US', options);
            
            // Clean up the string format (toLocaleDateString often adds a comma after the day)
            const cleanTimeString = timeString.replace(',', '');
            
            // Inject the time into the HTML element
            document.getElementById('live-clock').textContent = cleanTimeString;
        }

        // Run the clock function immediately when the page loads
        updateClock();

        // Update the clock every second (1000 milliseconds) to keep it accurate
        setInterval(updateClock, 1000);


// Toggle Dark Mode
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀' : '🌙';
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

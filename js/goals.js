
window.addEventListener('load', function() {
const preloader = document.getElementById('preloader');
if (preloader) {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    
    setTimeout(() => {
    preloader.style.display = 'none';
    }, 800);
}

document.querySelector(".heroContent h1").style.opacity = "1";
document.querySelector(".heroContent h1").style.transform = "translateY(0)";
});

// setTimeout(() => {
// const preloader = document.getElementById('preloader');
// if (preloader && preloader.style.display !== 'none') {
//     preloader.style.opacity = '0';
//     preloader.style.visibility = 'hidden';
//     setTimeout(() => {
//     preloader.style.display = 'none';
//     }, 800);
// }
// }, 3000);

// const menuToggle = document.getElementById('menu-toggle');
// const navLinks = document.getElementById('nav-links');

// if (menuToggle && navLinks) {
// menuToggle.addEventListener('click', function() {
//     navLinks.classList.toggle('active');
//     menuToggle.classList.toggle('active');
// });
// }

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
slides[currentSlide].classList.remove("active-slide");
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].classList.add("active-slide");
}

slides[currentSlide].classList.add("active-slide");
setInterval(showNextSlide, 5000);

// const dropdowns = document.querySelectorAll('.dropdown > a');
// dropdowns.forEach(dropdown => {
// dropdown.addEventListener('click', function(e) {
//     if (window.innerWidth <= 1024) {
//     e.preventDefault();
//     const parent = this.parentElement;
//     parent.classList.toggle('show-dropdown');
    
//     dropdowns.forEach(otherDropdown => {
//         if (otherDropdown !== this) {
//         otherDropdown.parentElement.classList.remove('show-dropdown');
//         }
//     });
//     }
// });
// });

// document.addEventListener('click', function(e) {
// if (window.innerWidth <= 1024 && !e.target.closest('.dropdown') && !e.target.closest('.menu-toggle')) {
//     document.querySelectorAll('.dropdown').forEach(dropdown => {
//     dropdown.classList.remove('show-dropdown');
//     });
// }
// });

const observerOptions = {
threshold: 0.1,
rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add('active');
    }
});
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// const subscribeBtn = document.querySelector('.email-subscribe input[type="submit"]');
// if (subscribeBtn) {
// subscribeBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     const email = document.querySelector('.email-subscribe input[type="email"]').value;
//     if (email) {
//     alert('Thank you for subscribing! We will keep you updated.');
//     document.querySelector('.email-subscribe input[type="email"]').value = '';
//     } else {
//     alert('Please enter a valid email address.');
//     }
// });
// }




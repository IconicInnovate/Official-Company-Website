let currentGallery = null;
let currentImages = [];
let currentIndex = 0;

// window.addEventListener('load', function() {
// const preloader = document.getElementById('preloader');
// if (preloader) {
//     preloader.style.opacity = '0';
//     preloader.style.visibility = 'hidden';
    
//     setTimeout(() => {
//     preloader.style.display = 'none';
//     }, 800);
// }

// document.querySelector(".heroContent h1").style.opacity = "1";
// document.querySelector(".heroContent h1").style.transform = "translateY(0)";
// });

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

// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

// function showNextSlide() {
// slides[currentSlide].classList.remove("active-slide");
// currentSlide = (currentSlide + 1) % slides.length;
// slides[currentSlide].classList.add("active-slide");
// }

// slides[currentSlide].classList.add("active-slide");
// setInterval(showNextSlide, 5000);

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

function scrollToBranch(branchId) {
const element = document.getElementById(branchId);
const navHeight = 56;
const tabsHeight = 100;
const elementPosition = element.getBoundingClientRect().top;
const offsetPosition =
    elementPosition + window.pageYOffset - navHeight - tabsHeight;

window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
});

document.querySelectorAll(".branch-tab").forEach((tab) => {
    tab.classList.remove("active");
});
event.target.classList.add("active");
}

function openGallery(type) {
const modal = document.getElementById(type + "Modal");
modal.style.display = "block";
document.body.style.overflow = "hidden";
}

function closeGallery(type) {
const modal = document.getElementById(type + "Modal");
modal.style.display = "none";
document.body.style.overflow = "auto";
}

function openFullscreenViewer(galleryType, index) {
  currentGallery = galleryType;
  currentIndex = index;
  
  const modal = document.getElementById(galleryType + "Modal");
  const galleryItems = modal.querySelectorAll('.gallery-item img');
  currentImages = Array.from(galleryItems).map(img => img.src);
  
  showFullscreenImage();
  document.getElementById('fullscreenViewer').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeFullscreenViewer() {
document.getElementById('fullscreenViewer').style.display = 'none';
document.body.style.overflow = 'auto';
}

function showFullscreenImage() {
const fullscreenImage = document.getElementById('fullscreenImage');
const imageCounter = document.getElementById('imageCounter');

fullscreenImage.src = currentImages[currentIndex];
imageCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
}

function navigateImage(direction) {
currentIndex += direction;

if (currentIndex < 0) {
    currentIndex = currentImages.length - 1;
} else if (currentIndex >= currentImages.length) {
    currentIndex = 0;
}

showFullscreenImage();
}

document.addEventListener('keydown', function(e) {
const viewer = document.getElementById('fullscreenViewer');
if (viewer.style.display === 'flex') {
    if (e.key === 'Escape') {
    closeFullscreenViewer();
    } else if (e.key === 'ArrowLeft') {
    navigateImage(-1);
    } else if (e.key === 'ArrowRight') {
    navigateImage(1);
    }
}
});

let touchStartX = 0;
let touchEndX = 0;

document.getElementById('fullscreenViewer').addEventListener('touchstart', function(e) {
touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('fullscreenViewer').addEventListener('touchend', function(e) {
touchEndX = e.changedTouches[0].screenX;
handleSwipe();
});

function handleSwipe() {
const swipeThreshold = 50;
const diff = touchStartX - touchEndX;

if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
    navigateImage(1);
    } else {
    navigateImage(-1);
    }
}
}

document.querySelectorAll('#designsModal .gallery-item').forEach((item, index) => {
  item.addEventListener('click', function() {
    openFullscreenViewer('designs', index);
  });
});

document.querySelectorAll('#interiorsModal .gallery-item').forEach((item, index) => {
  item.addEventListener('click', function() {
    openFullscreenViewer('interiors', index);
  });
});

window.onclick = function (event) {
if (event.target.classList.contains("gallery-modal")) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
}
};

window.addEventListener("scroll", function () {
const sections = document.querySelectorAll(".branch-section");
const tabs = document.querySelectorAll(".branch-tab");

let current = "";
sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 300) {
    current = section.getAttribute("id");
    }
});

tabs.forEach((tab) => {
    tab.classList.remove("active");
    if (tab.getAttribute("onclick").includes(current)) {
    tab.classList.add("active");
    }
});
});
 


// function hidePreloaderAndShowWhatsApp() {
// const preloader = document.getElementById('preloader');
// const whatsappBtn = document.getElementById('whatsapp-chat-btn');

// if (preloader && preloader.style.display !== 'none') {
//     preloader.style.opacity = '0';
//     preloader.style.visibility = 'hidden';
    
//     setTimeout(() => {
//     preloader.style.display = 'none';

//     if (whatsappBtn) {
//         whatsappBtn.style.display = 'flex';
//     }
//     }, 800);
// }

// document.querySelector(".heroContent h1").style.opacity = "1";
// document.querySelector(".heroContent h1").style.transform = "translateY(0)";
// }

// window.addEventListener('load', hidePreloaderAndShowWhatsApp);

// setTimeout(hidePreloaderAndShowWhatsApp, 3000);
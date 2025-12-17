// window.addEventListener('load', function() {
//     const preloader = document.getElementById('preloader');
//     setTimeout(function() {
//         preloader.style.display = 'none';
//     }, 1500);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const dropdowns = document.querySelectorAll(".dropdown");
//     const navLinks = document.getElementById("nav-links");
//     const menuToggle = document.getElementById("menu-toggle");

//     const MOBILE_BREAKPOINT = 1024;

//     dropdowns.forEach((dropdown) => {
//         const dropdownLink = dropdown.querySelector("a");

//         dropdown.addEventListener("mouseenter", function (event) {
//             if (window.innerWidth > MOBILE_BREAKPOINT) {
//                 this.classList.add("show-dropdown");
//                 dropdowns.forEach((otherDropdown) => {
//                     if (otherDropdown !== this) {
//                         otherDropdown.classList.remove("show-dropdown");
//                     }
//                 });
//             }
//         });

//         dropdown.addEventListener("mouseleave", function (event) {
//             if (window.innerWidth > MOBILE_BREAKPOINT) {
//                 this.classList.remove("show-dropdown");
//             }
//         });

//         dropdownLink.addEventListener("click", function (event) {
//             if (window.innerWidth <= MOBILE_BREAKPOINT) {
//                 const subMenu = dropdown.querySelector(".dropdown-menu");

//                 if (subMenu && subMenu.children.length > 0) {
//                     event.preventDefault();
//                 }

//                 dropdown.classList.toggle("show-dropdown");

//                 dropdowns.forEach((otherDropdown) => {
//                     if (otherDropdown !== dropdown) {
//                         otherDropdown.classList.remove("show-dropdown");
//                     }
//                 });
//             }
//         });
//     });

//     window.addEventListener("click", function (event) {
//         if (
//             window.innerWidth > MOBILE_BREAKPOINT &&
//             !event.target.closest(".dropdown")
//         ) {
//             dropdowns.forEach((dropdown) => {
//                 dropdown.classList.remove("show-dropdown");
//             });
//         }
//     });

//     menuToggle.addEventListener("click", () => {
//         navLinks.classList.toggle("active");
//         menuToggle.classList.toggle("active");
//     });

//     const navLinksList = document.querySelectorAll("#nav-links a");
//     navLinksList.forEach((link) => {
//         link.addEventListener("click", () => {
//             if (
//                 window.innerWidth <= MOBILE_BREAKPOINT &&
//                 navLinks.classList.contains("active")
//             ) {
//                 if (link.closest(".dropdown-menu")) {
//                     setTimeout(() => {
//                         navLinks.classList.remove("active");
//                         menuToggle.classList.remove("active");

//                         dropdowns.forEach((dropdown) => {
//                             dropdown.classList.remove("show-dropdown");
//                         });
//                     }, 50);
//                 }
//             }
//         });
//     });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    

    // document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     const fName = document.getElementById('fName').value;
    //     alert('Thank you ' + fName + ' for subscribing! We will keep you updated.');
    //     this.reset();
    // });


    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const target = document.querySelector(this.getAttribute('href'));
    //         if (target) {
    //             target.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start'
    //             });
    //         }
    //     });
    // });

    // const scrollTopBtn = document.getElementById('scrollTop');
    
    //window.addEventListener('scroll', () => {
    //  if (window.pageYOffset > 300) {
    //      scrollTopBtn.classList.add('show');
        //} else {
        //  scrollTopBtn.classList.remove('show');


        //}
    // });



    // scrollTopBtn.addEventListener('click', () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });
//});
        

// function hidePreloaderAndShowWhatsApp() {
//     const preloader = document.getElementById('preloader');
//     const whatsappBtn = document.getElementById('whatsapp-chat-btn');
    
//     if (preloader && preloader.style.display !== 'none') {
//     preloader.style.opacity = '0';
//     preloader.style.visibility = 'hidden';
    
//     setTimeout(() => {
//         preloader.style.display = 'none';

//         if (whatsappBtn) {
//         whatsappBtn.style.display = 'flex';
//         }
//     }, 800);
//     }

//     document.querySelector(".heroContent h1").style.opacity = "1";
//     document.querySelector(".heroContent h1").style.transform = "translateY(0)";
// }

// window.addEventListener('load', hidePreloaderAndShowWhatsApp);

// setTimeout(hidePreloaderAndShowWhatsApp, 3000);
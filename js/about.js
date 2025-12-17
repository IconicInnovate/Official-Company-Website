document.addEventListener('DOMContentLoaded', () => {
  const downloadBrochureBtn = document.querySelector('.download-brochure-btn');
  const heroSection = document.querySelector('.about-hero-section');
  const sectionsToAnimate = document.querySelectorAll(
    '.company-overview-section .col-md-6, .leadership-section .col-md-6, .team-member, .newsletter-section'
  );

  // Sticky 'Download Brochure' button logic
  // if (heroSection && downloadBrochureBtn) {
  //   const heroSectionHeight = heroSection.offsetHeight;

  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > heroSectionHeight - 100) { // Adjust 100px for earlier appearance
  //       downloadBrochureBtn.style.display = 'block';
  //     } else {
  //       downloadBrochureBtn.style.display = 'block'; // Keep it visible in hero section
  //     }
  //   });
  // }

  // Scroll-in animation logic
  // const observerOptions = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.05, // Trigger when 10% of the item is visible
  // };
  

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'flyInFromBottom 3s ease-out forwards';
        observer.unobserve(entry.target); // Stop observing once animated
      } 
    });
  }, observerOptions);

  sectionsToAnimate.forEach((section) => {
    section.style.opacity = '0'; // Initially hide elements
    section.style.transform = 'translateY(50px)'; // Initial position for animation
    observer.observe(section);
  });
});

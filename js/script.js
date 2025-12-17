function safeSelect(selector) {
    return document.querySelector(selector);
}

function safeSelectAll(selector) {
    return document.querySelectorAll(selector);
}



document.addEventListener("DOMContentLoaded", function () {
    const slides = safeSelectAll(".slide");
    if (!slides.length) return;

    let currentSlide = 0;
    slides[currentSlide].classList.add("active-slide");

    function showNextSlide() {
        slides[currentSlide].classList.remove("active-slide");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active-slide");
    }

    setInterval(showNextSlide, 5000);
});


  // --- Dropdown Menu Logic (FIXED: Mobile Click persistence) ---
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = safeSelectAll(".dropdown");
    const navLinks = safeSelect("#nav-links");
    const menuToggle = safeSelect("#menu-toggle");

    if (!dropdowns.length || !navLinks || !menuToggle) return;

    dropdowns.forEach((dropdown) => {
        const dropdownLink = dropdown.querySelector("a");
        if (!dropdownLink) return;

        dropdownLink.addEventListener("click", function (event) {
            if (window.innerWidth <= 1024) {
                event.preventDefault();
                dropdown.classList.toggle("show-dropdown");

                dropdowns.forEach((other) => {
                    if (other !== dropdown) other.classList.remove("show-dropdown");
                });
            }
        });
    });

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});


  // --- Close Mobile Menu on Sub-Link Click (After navigating) ---
  const navLinksList = document.querySelectorAll("#nav-links a");
  navLinksList.forEach((link) => {
    link.addEventListener("click", () => {
      // Check if the menu is open AND it's a mobile size
      if (
        window.innerWidth <= MOBILE_BREAKPOINT &&
        navLinks.classList.contains("active")
      ) {
        if (link.closest(".dropdown-menu")) {
          setTimeout(() => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            dropdowns.forEach((dropdown) => {
              dropdown.classList.remove("show-dropdown");
            });
          }, 50);
        }
      }
    });
  });

  // --- Hero text animation
  window.addEventListener("load", () => {
    document.querySelector(".hero h1").style.opacity = "1";
    document.querySelector(".hero h1").style.transform = "translateY(0)";

    document.querySelector(".hero-sectors").style.opacity = "1";
    document.querySelector(".hero-sectors").style.transform = "translateY(0)";
  });

// About us section
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".image-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

// Core values
document.addEventListener("DOMContentLoaded", () => {
  const valuesGrid = document.querySelector(".values-grid");
  const prevButton = document.querySelector(".nav-button.prev");
  const nextButton = document.querySelector(".nav-button.next");
  const valueCards = document.querySelectorAll(".value-card");

  // Function to scroll to the next or previous card group
  const scrollCards = (direction) => {
    if (!valuesGrid || valueCards.length === 0) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let scrollAmount;

    if (isMobile) {
      // Scroll one card at a time on mobile
      scrollAmount = valueCards[0].offsetWidth + 15; // 15px is the gap
    } else {
      // Scroll four cards at a time on desktop
      scrollAmount = (valueCards[0].offsetWidth + 20) * 4; // 20px is the gap
    }

    const currentScroll = valuesGrid.scrollLeft;

    if (direction === "next") {
      valuesGrid.scroll({
        left: currentScroll + scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "prev") {
      valuesGrid.scroll({
        left: currentScroll - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Event listeners for navigation buttons
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => scrollCards("prev"));
    nextButton.addEventListener("click", () => scrollCards("next"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const valuesGrid = document.querySelector(".values-grid");
  const prevButton = document.querySelector(".nav-button.prev");
  const nextButton = document.querySelector(".nav-button.next");
  const scrollAmount = 250;

  if (valuesGrid && prevButton && nextButton) {
    nextButton.addEventListener("click", () => {
      valuesGrid.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    prevButton.addEventListener("click", () => {
      valuesGrid.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  }
});

// Building sustainable section

// Add simple interactivity
const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    alert("Redirecting to our Goal & SDG page...");
    // window.location.href = "goals.html";
  });
}

// Animation effect when section enter
const section = document.querySelector(".sustainable-section");

if (section) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add("visible");
      }
    });
  });

  observer.observe(section);
}

// footer

document.addEventListener("DOMContentLoaded", () => {
    const openConsultationBtn = safeSelect("#openConsultation");
    const consultationModal = safeSelect("#consultationModal");
    const closeModal = safeSelect("#closeModal");

    if (!openConsultationBtn || !consultationModal || !closeModal) return;

    openConsultationBtn.addEventListener("click", () => {
        consultationModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        consultationModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === consultationModal) {
            consultationModal.style.display = "none";
        }
    });
});


    // Close modal with Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && consultationModal.style.display === "block") {
        consultationModal.style.display = "none";
      }
    });




  
  //  Here is my touch for the subscribe form alert
  // const form = document.querySelector(".subscribe-form");

  // if (form) {
  //   form.addEventListener("submit", () => {
  //     alert("Thank you for subscribing!");
  //   });
  // }


  
  // const form = document.querySelector(".signup-form");

  // if (form) {
  //   form.addEventListener("submit", (event) => {
  //     event.preventDefault(); // Prevents the page from reloading on form submission

  //     const firstName = form.querySelector('input[type="text"]').value;
  //     const email = form.querySelector('input[type="email"]').value;

  //     console.log("Form Submission Details:");
  //     console.log(`First Name: ${firstName}`);
  //     console.log(`Email: ${email}`);

  //     alert("Thank you for subscribing!!!!!");
  //   });
  // }


/* =========================================
   ANUSHKA KESARKAR — PORTFOLIO JAVASCRIPT
========================================= */

/* =========================================
   1. PERSONAL LINKS
========================================= */

const PORTFOLIO = {
  email: "akesarkar2009@gmail.com",
  github: "https://github.com/akesarkar2009-eng",
  linkedin: "https://www.linkedin.com/in/anushka-kesarkar-44a5273a4/"
};


/* =========================================
   2. MAIN INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     3. MOBILE NAVIGATION
  ========================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  function closeMenu() {
    if (!menuToggle || !navLinks) return;

    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
      "aria-label",
      "Open navigation menu"
    );
  }

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

    });

    // Close menu after selecting a navigation link
    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", closeMenu);

    });

    // Close menu using Escape key
    document.addEventListener("keydown", event => {

      if (event.key === "Escape") {
        closeMenu();
      }

    });

    // Close menu when clicking outside navigation
    document.addEventListener("click", event => {

      if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }

    });

  }


  /* =========================================
     4. AUTOMATIC COPYRIGHT YEAR
  ========================================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================================
     5. EMAIL FUNCTIONALITY
  ========================================= */

  const emailLink = document.getElementById("emailLink");
  const contactHint = document.getElementById("contactHint");

  if (emailLink && PORTFOLIO.email.trim()) {

    const email = PORTFOLIO.email.trim();

    emailLink.href = `mailto:${email}`;

    if (contactHint) {
      contactHint.textContent = `You can reach me at ${email}.`;
    }

  }


  /* =========================================
     6. GITHUB AND LINKEDIN LINKS
  ========================================= */

  function setProfileLink(elementId, url) {

    const link = document.getElementById(elementId);

    if (!link || !url || !url.trim()) return;

    try {

      const parsedURL = new URL(url);

      if (
        parsedURL.protocol !== "https:" &&
        parsedURL.protocol !== "http:"
      ) {
        return;
      }

      link.href = parsedURL.href;
      link.hidden = false;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

    } catch (error) {

      console.warn(`Invalid profile URL: ${elementId}`);

    }

  }

  setProfileLink("githubLink", PORTFOLIO.github);

  setProfileLink("linkedinLink", PORTFOLIO.linkedin);


  /* =========================================
     7. SCROLL REVEAL ANIMATIONS
  ========================================= */

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach(item => {

      observer.observe(item);

    });

  } else {

    // Fallback for older browsers
    revealItems.forEach(item => {

      item.classList.add("is-visible");

    });

  }

});

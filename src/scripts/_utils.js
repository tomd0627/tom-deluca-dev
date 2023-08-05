export const initializeUtills = () => {
  // Header utilities
  const header = document.querySelector(".header");

  if (header !== null) {
    // Nav toggle on mobile
    const body = document.body;
    const menuToggle = document.querySelector(".header__menu-toggle");
    const menuLinks = document.querySelectorAll(".header__nav a");

    const toggleHeaderNav = (e) => {
      e.preventDefault();
      e.stopPropagation();
      body.classList.toggle("show-nav");
    };

    const closeHeaderNav = () => {
      body.classList.remove("show-nav");
    };

    menuToggle.addEventListener("click", toggleHeaderNav);
    menuToggle.addEventListener("keyup", (e) => {
      if (e.key === "Enter" || e.keyCode === 13) {
        toggleHeaderNav;
      }
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        closeHeaderNav();

        // Smooth scroll anchor links
        e.preventDefault();
        const linkHref = link.getAttribute("href");
        const section = document.querySelector(linkHref);

        section.scrollIntoView({ behavior: "smooth" });
      });
    });

    body.addEventListener("click", () => {
      closeHeaderNav();
    });
  }

  // Footer utilities
  const footer = document.querySelector(".footer");

  if (footer !== null) {
    // Populate copyright year
    const date = new Date();
    const year = date.getFullYear();
    const copyrightYear = document.querySelector(".footer__copyright-year");

    copyrightYear.innerHTML = year;
  }
};

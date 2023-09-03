export const initializeHeader = () => {
  const body = document.body;

  // Header utilities
  const header = document.querySelector(".header");

  if (header !== null) {
    // Nav toggle on mobile
    const menuToggle = document.querySelector(".header__menu-toggle");
    const menuLinks = document.querySelectorAll(".header__nav__anchor");

    const toggleHeaderNav = (e) => {
      e.preventDefault();
      e.stopPropagation();
      body.classList.toggle("show-nav");
    };

    const closeHeaderNav = () => {
      body.classList.remove("show-nav");
    };

    if (menuToggle !== null) {
      menuToggle.addEventListener("click", toggleHeaderNav);
      menuToggle.addEventListener("keyup", (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
          toggleHeaderNav;
        }
      });
    }

    if (menuLinks !== null) {
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
    }

    body.addEventListener("click", () => {
      closeHeaderNav();
    });
  }
};

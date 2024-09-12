export const initializeHeader = () => {
  const body = document.body;

  // Header utilities
  const header = document.querySelector(".header");

  if (header !== null) {
    // Nav toggle on mobile
    const menuToggle = document.querySelector(".header__menu-toggle");
    const menuLinks = document.querySelectorAll(".header__nav__anchor");
    const sections = document.querySelectorAll("section");

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
    } else {
      return;
    }

    if (menuLinks !== null) {
      // Smooth scroll anchor links
      menuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          closeHeaderNav();

          e.preventDefault();
          const linkHref = link.getAttribute("href");
          const scrolledSection = document.querySelector(linkHref);

          scrolledSection.scrollIntoView({ behavior: "smooth" });
        });
      });

      // On desktop, highlight 'active' section on scroll
      const mqDesktop = window.matchMedia("(min-width: 1024px)");

      if (mqDesktop.matches) {
        const options = {
          threshold: 0.4,
        };

        const observer = new IntersectionObserver((sections) => {
          sections.forEach((section) => {
            if (section.isIntersecting) {
              menuLinks.forEach((link) => link.classList.remove("active"));
              const activeLink = document.querySelector(
                `.header__nav__anchor[href="#${section.target.id}"]`
              );
              activeLink.classList.add("active");
            }
          });
        }, options);

        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    } else {
      return;
    }

    body.addEventListener("click", () => {
      closeHeaderNav();
    });
  } else {
    return;
  }
};

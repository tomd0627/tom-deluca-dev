export const initializeUtills = () => {
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
    link.addEventListener("click", () => {
      closeHeaderNav();
    });
  });

  body.addEventListener("click", () => {
    closeHeaderNav();
  });

  // Populate copyright year
  const date = new Date();
  const year = date.getFullYear();
  const copyrightYear = document.querySelector(".footer__copyright-year");

  copyrightYear.innerHTML = year;
};

export const initializeProjectCard = () => {
  // Handle 'flip' effect on mobile
  const projectCardClick = () => {
    const projectCArds = document.querySelectorAll(
      ".project-card-list__item-container"
    );

    projectCArds.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });
      card.addEventListener("keyup", (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
          card.classList.toggle("active");
        }
      });
    });
  };

  const mq = 992;

  if (window.matchMedia(`(min-width: ${mq}px`).matches) {
    return false;
  } else {
    projectCardClick();
  }
};

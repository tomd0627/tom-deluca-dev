export const initializeProjectCard = () => {
  const projectCArds = document.querySelectorAll(
    ".project-card-list__item-container"
  );

  // Disable link click
  projectCArds.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  projectCardClick();
};

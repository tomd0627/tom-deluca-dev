import { initializeAnimations } from "./_animations";
import { initializeProjectCard } from "./_projectCard";
import { initializeUtills } from "./_utils";

export const initialize = () => {
  initializeUtills();
  initializeAnimations();
  initializeProjectCard();
};

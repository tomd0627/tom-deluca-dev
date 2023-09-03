import { initializeAnimations } from "./_animations";
import { initializeFooter } from "./_footer";
import { initializeHeader } from "./_header";
import { initializeProjectCard } from "./_projectCard";
import { initializeUtills } from "./_utils";

export const initialize = () => {
  initializeUtills();
  initializeHeader();
  initializeFooter();
  initializeAnimations();
  initializeProjectCard();
};

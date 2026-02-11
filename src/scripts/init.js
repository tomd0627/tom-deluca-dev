import { initializeAnimations } from './_animations';
import { initializeFooter } from './_footer';
import { initializeHeader } from './_header';
import { initializeProjectCard } from './_projectCard';
import { initializeUtills } from './_utils';
import { initializeSmoothScroll } from './_smoothScroll';
import { initializeFormValidation } from './_formValidation';

export const initialize = () => {
  initializeUtills();
  // Global smooth-scroll for same-page anchor links
  initializeSmoothScroll({ headerSelector: '.header' });
  initializeHeader();
  initializeFooter();
  initializeAnimations();
  initializeProjectCard();
  initializeFormValidation('.form');
};

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Slide animation
  const slideAnimation = (
    slideElements = gsap.utils.toArray(".animate-slide"),
    slideYVal = 50,
    slideStartVal = "top 85%",
    slideEndVal = "bottom 15%"
  ) => {
    gsap.set(slideElements, {
      opacity: 0,
      y: slideYVal,
    }),
      ScrollTrigger.batch(slideElements, {
        start: slideStartVal,
        end: slideEndVal,

        onEnter: (e) =>
          gsap.to(e, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
          }),
        onEnterBack: (e) =>
          gsap.to(e, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
          }),
        onLeave: (e) =>
          gsap.to(e, {
            opacity: 0,
            y: -slideYVal,
            stagger: 0.3,
          }),
        onLeaveBack: (e) =>
          gsap.to(e, {
            opacity: 0,
            y: slideYVal,
            stagger: 0.3,
          }),
      });
  };

  // Fade animation
  const fadeAnimation = (
    fadeElements = gsap.utils.toArray(".animate-fade"),
    fadeStart = "top 85%",
    fadeEnd = "bottom 15%"
  ) => {
    fadeElements.forEach((fadeElement) => {
      gsap.from(fadeElement, {
        scrollTrigger: {
          start: fadeStart,
          end: fadeEnd,
          trigger: fadeElement,
          toggleClass: "active",
        },
      });
    });
  };

  slideAnimation();
  fadeAnimation();
};

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Slide animation
  const slideAnimation = (
    slideElements = gsap.utils.toArray(".animate-slide"),
    slideOpacityStartVal = 0,
    slideOpacityEndVal = 1,
    slideYPosStartVal = 50,
    slideYPosEndVal = 0,
    slideStartVal = "top 85%",
    slideEndVal = "bottom 15%",
    slideStaggerVal = 0.3
  ) => {
    gsap.set(slideElements, {
      opacity: slideOpacityStartVal,
      y: slideYPosStartVal,
    }),
      ScrollTrigger.batch(slideElements, {
        start: slideStartVal,
        end: slideEndVal,

        onEnter: (e) =>
          gsap.to(e, {
            opacity: slideOpacityEndVal,
            y: slideYPosEndVal,
            stagger: slideStaggerVal,
          }),
        onEnterBack: (e) =>
          gsap.to(e, {
            opacity: slideOpacityEndVal,
            y: slideYPosEndVal,
            stagger: slideStaggerVal,
          }),
        onLeave: (e) =>
          gsap.to(e, {
            opacity: slideOpacityStartVal,
            y: -slideYPosStartVal,
            stagger: slideStaggerVal,
          }),
        onLeaveBack: (e) =>
          gsap.to(e, {
            opacity: slideOpacityStartVal,
            y: slideYPosStartVal,
            stagger: slideStaggerVal,
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

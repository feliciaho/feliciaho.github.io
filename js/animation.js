gsap.registerPlugin(ScrollTrigger);

gsap.set(".secTitle", { scale: 0.5 });
gsap.set(".title2", { scale: 0.5 });
// gsap.set(".secText", { yPercent: -10});
gsap.set(".banner", { yPercent: 10 });

gsap.to(".mainTitle1", {
  xPercent: 200,
  scale: 5,
  opacity: 0,
  ease: "none",
  start: "top center",
  end: "bottom center",
  scrollTrigger: {
    scrub: 1,
  },
});

document.querySelectorAll(".secTitle").forEach((secTitle) => {
  gsap.to(secTitle, {
    yPercent: 5,
    scale: 1.2,
    ease: "none",
    start: "top center",
    end: "bottom center",
    scrollTrigger: {
      trigger: secTitle,
      scrub: 1,
    },
  });
});

document.querySelectorAll(".banner").forEach((banner) => {
  gsap.to(banner, {
    yPercent: -10,
    ease: "none",
    scale: 1,
    scrollTrigger: {
      trigger: banner,
      scrub: 1,
    },
  });
});

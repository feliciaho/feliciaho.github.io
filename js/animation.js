gsap.registerPlugin(ScrollTrigger);

gsap.set(".secTitle", { scale: 0.5 });
gsap.set(".project_s1", { yPercent: 0});
gsap.set(".banner", { yPercent: 10 });
gsap.set(".secTextUiux", { yPercent: -5 });


// 一開始就動
gsap.to(".mainTitle1", {
  xPercent: 200,
  scale: 5,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    scrub: 1,
  },
});

// 當滾動到特定區域時，觸發動畫
document.querySelectorAll(".secTitle").forEach((secTitle) => {
  gsap.to(secTitle, {
    yPercent: 5,
    scale: 1.2,
    ease: "none",
    scrollTrigger: {
      trigger: secTitle,
      scrub: 1,
    },
  });
});

document.querySelectorAll(".project_s1").forEach((project_s1) => {
  gsap.to(project_s1, {
    yPercent: 10,
    ease: "none",
    scale: 1,
    scrollTrigger: {
      trigger: project_s1,
      scrub: 1,
    },
  });
});

document.querySelectorAll(".banner, .bannerVisual").forEach((banner) => {
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

document.querySelectorAll(".secTextUiux").forEach((secTextUiux) => {
  gsap.to(secTextUiux, {
    yPercent: 25,
    ease: "none",
    scale: 1,
    scrollTrigger: {
      trigger: secTextUiux,
      scrub: 1,
    },
  });
});

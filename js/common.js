// 側選單
$(".sideBar a[href^='#']").on("click", function (e) {
    // store hash
    var hash = this.hash;
    console.log(hash);
  
    // animate
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 40,
      },
      800,
    );
  });
  
$(".title3").click(function () {
$("body, html").animate(
    {
    scrollTop: 0,
    },
    1000
);
});

gsap.registerPlugin(ScrollTrigger);

gsap.set(".title1", { scale: 0.5 });
gsap.set(".title2", { scale: 0.5});
gsap.set(".text1", { yPercent: -20 ,scale: 0.8});
gsap.set(".imgBox", { yPercent: 20});

gsap.to(".titleBig", {
  xPercent: -100,
  scale: 2,
  opacity: 0,
  ease: "none",
  start: "top center", 
  end: "bottom center", 
  scrollTrigger: {
    scrub: 1
  }, 
});

gsap.to(".texttransform", {
  xPercent: 200,
  scale: 5,
  opacity: 0,
  ease: "none",
  start: "top center", 
  end: "bottom center", 
  scrollTrigger: {
    scrub: 1
  }, 
});

gsap.to(".title1", {
  yPercent: 5,
  scale: 1,
  ease: "none",
  start: "top center", 
  end: "bottom center",
  scrollTrigger: {
    trigger: ".title1",
    scrub: 1
  }, 
});
gsap.to(".title2", {
  yPercent: 5,
  scale: 1,
  ease: "none",
  start: "top center", 
  end: "bottom center", 
  scrollTrigger: {
    trigger: ".title2",
    scrub: 1
  }, 
});
gsap.to(".text1", {
  yPercent: 10,
  ease: "none",
  start: "top center", 
  end: "bottom center", 
  scrollTrigger: {
    scrub: 1
  }, 
});
document.querySelectorAll('.text1').forEach((imgBox) => {
  gsap.to(imgBox, {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: imgBox,
      scrub: 1
    }
  });
});

document.querySelectorAll('.imgBox').forEach((imgBox) => {
  gsap.to(imgBox, {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: imgBox,
      scrub: 1
    }
  });
});
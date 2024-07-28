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

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".clusterGreat", {
//   scrollTrigger: {
//     trigger: ".clusterGreat",
//     start: "top center", // 动画开始位置
//     end: "bottom center", // 动画结束位置
//     scrub: 1, // 平滑滚动
//     markers: true // 显示滚动触发点的标记
//   },
//   x: 500, // 动画效果
//   rotation: 360, // 动画效果
//   duration: 3
// });
gsap.set(".title1", { scale: 0.5 });
gsap.set(".title2", { scale: 0.5});
gsap.set(".text1", { yPercent: -20 ,scale: 0.8});
gsap.set(".imgBox", { yPercent: 20});

gsap.to(".titleBig", {
  xPercent: -200,
  scale: 4,
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

gsap.to(".scrollBox", {
  yPercent: 1,
  scale: 0.1,
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
  yPercent: 40,
  scale: 1.2,
  ease: "none",
  start: "top center", 
  end: "bottom center", 
  scrollTrigger: {
    scrub: 1
  }, 
});
gsap.to(".imgBox", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    scrub: 1
  }, 
});
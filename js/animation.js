gsap.registerPlugin(ScrollTrigger);

gsap.set(".title1", { scale: 0.5 });
gsap.set(".title2", { scale: 0.5 });
gsap.set(".text1", { yPercent: -10, scale: 1 });
gsap.set(".imgBox", { yPercent: 10 });

gsap.to(".mainTitle", {
xPercent: -100,
scale: 2,
opacity: 0,
ease: "none",
start: "top center",
end: "bottom center",
scrollTrigger: {
    scrub: 1,
},
});

gsap.to(".textTransform", {
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

gsap.to(".title1", {
yPercent: 5,
scale: 1,
ease: "none",
start: "top center",
end: "bottom center",
scrollTrigger: {
    trigger: ".title1",
    scrub: 1,
},
});

document.querySelectorAll(".text1").forEach((text1) => {
gsap.to(text1, {
    yPercent: 10,
    ease: "none",
    scale: 0.9,
    opacity: 0.9,
    scrollTrigger: {
    trigger: text1,
    scrub: 1,
    },
});
});

document.querySelectorAll(".imgBox").forEach((imgBox) => {
gsap.to(imgBox, {
    yPercent: -10,
    ease: "none",
    scale: 1,
    scrollTrigger: {
    trigger: imgBox,
    scrub: 1,
    },
});
});

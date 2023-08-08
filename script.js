let tl = gsap.timeline();

tl.to(".dot", { opacity: 1, duration: 0.5, delay: 1, repeat: 5, yoyo: true });
tl.to(".dot", { opacity: 1, duration: 0.3, repeat: 10, delay: 0, yoyo: true });
tl.to(".dot", { opacity: 0, duration: 0.5, repeat: 5, delay: 0, yoyo: true });
tl.to("#loaderHeading", { opacity: 1, duration: 0.3, delay: 0.5 });
tl.to(".dot", { opacity: 0, delay: 1 });
tl.to(".radar", { opacity: 0, scale: 3, duration: 0.3 });
tl.to(".preloader", { opacity: 0, duration: 0.3 });

tl.to(".content", { display: "grid", opacity: 1, duration: 1 });

tl.to(".page", {
  opacity: 1,
  duration: 0.3,
  stagger: 1,
});

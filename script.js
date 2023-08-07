let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");
let heading3 = document.getElementById("heading3");
let heading4 = document.getElementById("heading4");
let heading5 = document.getElementById("heading5");
let heading6 = document.getElementById("heading6");

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let heading1Top = random(0, 200);
let heading1Left = random(0, 600);
let heading2Top = random(200, 400);
let heading2Left = random(0, 600);
let heading3Top = random(400, 600);
let heading3Left = random(0, 600);
let heading4Top = random(0, 200);
let heading4Left = random(800, 1200);
let heading5Top = random(200, 400);
let heading5Left = random(800, 1200);
let heading6Top = random(400, 600);
let heading6Left = random(800, 1200);

heading1.style.top = `${heading1Top}px`;
heading1.style.left = `${heading1Left}px`;
heading2.style.top = `${heading2Top}px`;
heading2.style.left = `${heading2Left}px`;
heading3.style.top = `${heading3Top}px`;
heading3.style.left = `${heading3Left}px`;
heading4.style.top = `${heading4Top}px`;
heading4.style.left = `${heading4Left}px`;
heading5.style.top = `${heading5Top}px`;
heading5.style.left = `${heading5Left}px`;
heading6.style.top = `${heading6Top}px`;
heading6.style.left = `${heading6Left}px`;

let tl = gsap.timeline();

tl.from(".heading", {
  opacity: 0,

  stagger: 0.3,
  scrollTrigger: {
    trigger: "#loader",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "top 0",
    end: "top -200%",
    pin: true,
  },
});
tl.to(".heading", {
  transform: "translateX(-800%)",
  scrollTrigger: {
    trigger: "#loader",
    scroller: "body",
    scrub: 4,
    markers: true,
    start: "top -200%",
    end: "top -400%",
    // pin: true,
  },
});

tl.to("#loader", { delay: 0.5, duration: 3, top: "-100%" });

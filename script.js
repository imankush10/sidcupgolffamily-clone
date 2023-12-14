const loaderTimeline = gsap.timeline();

loaderTimeline
  .to('html',{
    overflow:'hidden',
  })
  .from(".first", {
    onStart() {
      $(".first").textillate({
        in: {
          effect: "fadeInUp",
          callback() {
            $(".first").textillate("out");
          },
        },
        out: {
          effect: "fadeOutUp",
        },
      });
    },
    ease: "Power4.easeOut",
  })
  .from(".second", {
    onStart() {
      $(".second").textillate({
        in: {
          effect: "fadeInUp",
          callback() {
            $(".second").textillate("out");
          },
        },
        out: {
          effect: "fadeOutUp",
        },
      });
    },
    opacity: 0,
    ease: "Power4.easeOut",
    delay: 0.6,
  })
  .from(".third", {
    onStart() {
      $(".third").textillate({
        in: {
          effect: "fadeInUp",
          callback() {
            $(".third").textillate("out");
          },
        },
        out: {
          effect: "fadeOutUp",
        },
      });
    },
    opacity: 0,
    ease: "Power4.easeOut",
    delay: 0.6,
  })
  .from(".fourth", {
    onStart() {
      $(".fourth").textillate({
        in: {
          effect: "fadeInUp",
        },
      });
    },
    opacity: 0,
    ease: "Power4.easeOut",
    delay: 0.6,
  })
  .to(".loader", {
    y: "-100%",
    delay: 0.6,
    ease: "Power4.easeOut",
    duration: 1,
  })
  .to('html',{
    overflow:'auto',
  })

let curTL = gsap.timeline();
gsap.to("nav", {
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -10%",
    scrub: 2,
  },
  backgroundColor: "black",
  height: "13%",
});

gsap.to("main", {
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    scrub: 2,
    start: "top 90%",
    end: "top 50%",
  },
  backgroundColor: "black",
});

const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursorBlur");
document.documentElement.addEventListener("mousemove", (dets) => {
  cursor.style.display = "block";
  cursorBlur.style.display = "block";
  gsap.to(cursor, {
    top: dets.clientY,
    left: dets.clientX,
    ease: Power3.ease,
  });
  gsap.to(cursorBlur, {
    top: dets.clientY,
    left: dets.clientX,
    ease: Power3.ease,
  });
});
const scrollText = document.querySelectorAll(".scrollText h1");
scrollText.forEach((text) => {
  text.addEventListener("mouseover", () => {
    cursor.style.opacity = 0;
  });
  text.addEventListener("mouseleave", () => {
    cursor.style.opacity = 1;
  });
});
const overlays = document.querySelectorAll(".overlay");
const cards = document.querySelectorAll(".card");

cards.forEach((card, idx) => {
  card.addEventListener("mouseenter", () => {
    curTL
      .to(cursor, {
        boxShadow: "inset 0 0 8px lightgreen",
        duration: 0,
      })
      .to(cursor, {
        backgroundColor: "transparent",
        scale: 5,
      });
    card.style.transform = "rotate3d(1,1,0,20deg)";
    overlays[idx].style.opacity = 1;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotate3d(-1,1,0,0)";
    overlays[idx].style.opacity = 0;
    gsap.to(cursor, {
      backgroundColor: "#95C11E",
      boxShadow: 0,
      scale: 1,
    });
  });
});

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",
    start: "top 70%",
  },
  opacity: 0,
  y: 30,
  duration: 2,
});

gsap.from(".card", {
  opacity: 0,
  scale: 0.8,
  ease: Power1,
  scrollTrigger: {
    trigger: ".card1",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.to(".firstQuote", {
  scrollTrigger: {
    trigger: ".quoteSection",
    scroller: "body",
    start: "top 75%",
    end: "top 35%",
    scrub: 1,
  },
  transform: "translate(50%,70%) rotate(180deg)",
  duration: 2,
});
gsap.to(".secondQuote", {
  scrollTrigger: {
    trigger: ".quoteSection",
    scroller: "body",
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
  transform: "translate(-50%,-70%)",
  duration: 2,
});
const navElms = document.querySelectorAll("nav h1");
navElms.forEach((elm) => {
  elm.addEventListener("mouseover", () => {
    curTL
      .to(cursor, {
        boxShadow: "inset 0 0 8px lightgreen",
        duration: 0,
      })
      .to(cursor, {
        backgroundColor: "transparent",
        scale: 5,
      });
  });
  elm.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      backgroundColor: "#95C11E",
      boxShadow: 0,
      scale: 1,
    });
  });
});

const buttons = document.querySelectorAll(".button");

buttons.forEach((elm) => {
  elm.addEventListener("mouseenter", () => {
    curTL
      .to(cursor, {
        boxShadow: "inset 0 0 8px lightgreen",
        duration: 0,
      })
      .to(cursor, {
        backgroundColor: "transparent",
        scale: 5,
      });
  });
  elm.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      backgroundColor: "#95C11E",
      boxShadow: "inset 0 0 8px lightgreen",
      scale: 1,
    });
  });
});

gsap.from(".lastText", {
  y: "60%",
  ease: Power1,
  scrollTrigger: {
    trigger: ".lastText",
    scroller: "body",
    start: "top 90%",
  },
});


const scrollingTexts = document.querySelectorAll('.scrollText h1');

scrollingTexts.forEach(txt=>{
  txt.addEventListener('mouseover',()=>{
    txt.style.color = '#95c11e';
  })

  txt.addEventListener('mouseleave',()=>{
    txt.style.color = 'transparent';
  })
})
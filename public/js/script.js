function valueSetters() {
  gsap.set(".nav a", { y: "-100%", opacity: 0 });
  gsap.set(".page1 .parent .child", { y: "100%" });
  gsap.set(".row .graphic", { opacity: 0 });
  gsap.set(".row a", { y: "100%", opacity: 0 });
  gsap.set(".about .content p span", { y: "100%", opacity: 0 });
  gsap.set(".projects .flow h2 span", { y: "100%", opacity: 0 });
  // gsap.set(".info",{x:"-100%",opacity:0});
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach((elem) => {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    // Copy the content of the element
    child.innerHTML = elem.innerHTML;
    // Append the child to the parent
    parent.appendChild(child);

    // Clear the content of the element
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function loaderAnimation() {
  let t1 = gsap.timeline();
  t1.from("#loader .child span", {
    x: window.innerWidth < 768 ? 50 : 100,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.5,
    ease: Power3.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-100%",
      duration: 0.5,

      ease: Circ.easeInOut,
    })

    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomePage();
      },
    });
  if (window.innerWidth <= 799) {
    // Small screens: Red moves up with loader
    t1.to("#loader", {
      height: 0,
      duration: 0.05,
      // delay:0.,
      ease: Circ.easeInOut,
    })
      .to(
        "#red",
        {
          height: "100%",
          top: 0,
          duration: 0.2,
          delay: -0.3,
          ease: Circ.easeInOut,
        },
        "-=1"
      ) // Sync with loader
      .to("#red", {
        height: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: -0.5,
        onComplete: function () {
          gsap.set("#red", { top: "100%" });
        },
      });
  } else {
    // Large screens: Keep original delay effect
    t1.to("#red", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1.7, // Keep original delay for large screens
      ease: Circ.easeInOut,
    }).to("#red", {
      height: "0%",
      duration: 1.4,
      delay: -0.8,
      ease: "expo.out",
    });
  }
}

function animateHomePage() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    //desktop
    let t1 = gsap.timeline();
    t1.to(".page1 span .child", {
      y: 0,
      duration: 2.5,
      delay: -1,
      stagger: 0.15,
      ease: Power3.easeInOut,
    })
      .to(".nav a", {
        y: 0,
        opacity: 1,
        delay: -1,
        duration: 0.4,
        stagger: 0.16,
        ease: Power2.easeInOut,
      })

      .to(".row a", {
        y: 0,
        duration: 0.4,
        opacity: 1,
        delay: -1,
        stagger: 0.15,
        ease: Power3.easeInOut,
      })
      .to(".row .graphic", {
        x: "-67%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.16,
        delay: -1.2,
        ease: Power3.easeInOut,
      })
      .to(".about .content p span", {
        y: 0,
        opacity: 1,
        stagger: 0.16, // Creates a delay effect for each span
        ease: "expo.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".about",
          scroller: ".main",
          start: "top 80%", // Animates when it enters 80% of the viewport
          end: "top 3%", // Ends at 50% viewport height
          toggleActions: "play none none reverse", // Runs forward, reverses on scroll back
          scrub: 1, // Smooth transition while scrolling
        },
      })
      .to(".projects .flow h2 span", {
        y: 0,
        opacity: 1,
        stagger: 0.16,
        ease: "expo.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".projects",
          scroller: ".main",
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
      });
  });

  mm.add("(max-width: 768px)", () => {
    // 📱 Mobile/Tablet animations (lighter or simpler)
    let t1 = gsap.timeline();

    t1.to(".page1 span .child", {
      y: 0,
      duration: 1.5,
      delay: -0.3,
      stagger: 0.15,
      ease: Power2.easeOut,
    })
      .to(".nav a", {
        y: 0,
        opacity: 1,
        delay: -0.7,
        duration: 0.3,
        stagger: 0.15,
        ease: Power1.easeOut,
      })
      .to(".row a", {
        y: 0,
        duration: 0.3,
        opacity: 1,
        delay: -0.5,
        stagger: 0.15,
        ease: Power1.easeOut,
      })

      // Optional: Keep scroll-based ones same or simpler
      .to(".about .content p span", {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "power1.out",
        duration: 1,
        scrollTrigger: {
          trigger: ".about",
          scroller: ".main",
          start: "top 70%",
          end: "top 5%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      })
      .to(".projects .flow h2 span", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "expo.out",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".projects",
          scroller: ".main",
          start: "top 98%",
          end: "top 50%",
          scrub: 1,
        },
      });
  });
}
function locoInit() {
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainer = document.querySelector(".main");

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    lerp: 0.06,
    smartphone: {
      smooth: true,
      lerp: 0.1,
    },
    tablet: {
      smooth: true,
      lerp: 0.1,
    },
  });

  // Sync Locomotive with ScrollTrigger
  locoScroll.on("scroll", ScrollTrigger.update);

  // Proxy ScrollTrigger to use Locomotive's scroll
  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType:
      getComputedStyle(scrollContainer).transform !== "none"
        ? "transform"
        : "fixed",
  });

  // Update Locomotive when ScrollTrigger refreshes
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // Final trigger to set everything up
  ScrollTrigger.refresh();
}
function imageTilt() {
  let images = document.querySelectorAll(".image .imgcnt");

  images.forEach((img, index) => {
    let xOffset = "-20%";
    let rotation = "-15deg";

    if (index === 1) {
      xOffset = "-28%";
      rotation = "-20deg";
    } else if (index === 2) {
      xOffset = "-15%";
      rotation = "-28deg";
    } else if (index === 3) {
      xOffset = "-20%";
      rotation = "-22deg";
    }

    gsap.from(img, {
      x: xOffset,
      rotate: rotation,
      scrollTrigger: {
        trigger: img,
        scroller: ".main",
        scrub: 1,
      },
    });
  });
}

// function imageTilt() {
//   let images = document.querySelectorAll(".image .imgcnt");
//   let t1 = gsap.timeline();
//   t1.from(images[1], {
//     scrollTrigger: {
//       trigger: images[1],
//       scroller: ".main",
//       scrub: true,
//     },
//     x: "-35%",
//     rotate: "-20deg",
//     duration: 2.8,
//   })
//     .from(images[2], {
//       scrollTrigger: {
//         trigger: images[2],
//         scroller: ".main",
//         scrub: true,
//       },
//       x: "-15%",
//       rotate: "-28deg",
//       duration: 2.8,
//     })
//     .from(images[3], {
//       scrollTrigger: {
//         trigger: images[3],
//         scroller: ".main",
//         scrub: true,
//       },
//       x: "-%",
//       rotate: "-22deg",
//       duration: 1.5,
//     });
// }
function hoverAnimation() {
  document.querySelectorAll(".cnt").forEach((cnt) => {
    const title = cnt.querySelector(".image-title");
    const projects = document.querySelector(".projects");
    cnt.addEventListener("mousemove", () => {
      cnt.querySelector("img").style.filter = "grayScale(100%)";
      title.style.opacity = "1";
      if (cnt.classList.contains("imageCnt1")) {
        projects.style.backgroundColor = "#C1C6D7";
      } else if (cnt.classList.contains("imageCnt2")) {
        projects.style.backgroundColor = "#FF99A8";
      } else if (cnt.classList.contains("imageCnt3")) {
        projects.style.backgroundColor = "#DBCABD";
      } else if (cnt.classList.contains("imageCnt4")) {
        projects.style.backgroundColor = "#FFBC99";
      } else if (cnt.classList.contains("imageCnt5")) {
        projects.style.backgroundColor = "#E5B5B3";
      }
    });

    cnt.addEventListener("mouseleave", () => {
      cnt.querySelector("img").style.filter = "grayScale(0)";
      title.style.opacity = "0";
      projects.style.backgroundColor = "#f2eae0";
    });
  });
}
function animateContactDiv() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    let t1 = gsap.timeline();
    t1.from(".contact .info", {
      y: "-80%",
      opacity: 0,
      stagger: 0.12,
      delay: 0.5,
      ease: "expo.InOut",
      duration: 1,
      scrollTrigger: {
        trigger: ".contact",
        scroller: ".main",
        start: "top 95%",
        end: "top 20%",
        scrub: 1,
      },
    })
      .from("#contact-form", {
        y: 400,
        stagger: 0.12,
        duration: 1,
        opacity: 0,
        delay: 1,
        ease: "expo.InOut",
        scrollTrigger: {
          trigger: ".contact .info",
          scroller: ".main",
          start: "top 95%",
          end: "top 20%",
          scrub: 1,
        },
      })
      .from(".contact-content span", {
        x: "100%",
        opacity: 0,
        stagger: 0.12,
        delay: 0.5,
        ease: "expo.InOut",
        scrollTrigger: {
          trigger: ".contact",
          scroller: ".main",
          scrub: 1,
          start: "top 95%",
          end: "top 20%",
        },
      });
  });

  mm.add("(max-width: 768px)", () => {
    let t1 = gsap.timeline();
    t1.from([".contact .info", "#contact-form"], {
      y: "-30%",
      opacity: 0,
      stagger: 0.12,
      delay: 0.3,
      ease: "expo.InOut",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contact",
        scroller: ".main",
        start: "top 95%",
        end: "top 50%",
        scrub: 1,
      },
    });
  });
}



function animateFooter() {
  const overlay = document.getElementById("credit-overlay");
  const creditBtn = document.getElementById("creditBtn");
  const closeBtn = document.getElementById("close-btn");

  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    creditBtn.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.set(overlay, { opacity: 1, y: 0, display: "block", scale: 1 });
      overlay.style.pointerEvents = "auto";

      let t1 = gsap.timeline();
      t1.from(overlay, {
        scale: 1,
        opacity: 0,
        duration: 0.2,
        ease: "expoInOut",
      }).from(
        "#credit-content .order1, #credit-content .order2, #credit-content .order3",
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    });

    closeBtn.addEventListener("click", () => {
      let t2 = gsap.timeline();
      t2.to(overlay, {
        // scale:1.2,
        // y:0,
        opacity: 0,
        duration: 0.3,
        ease: "expo.inOut",
        onComplete: () => {
          overlay.style.pointerEvents = "none";

          overlay.style.display = "none";
          gsap.set(overlay, { y: 0, opacity: 1 });
        },
      });
    });
  });

  mm.add("(max-width:768px)", () => {
    creditBtn.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.set(overlay, { opacity: 1, display: "block" });
      overlay.style.pointerEvents = "auto";
      let t1 = gsap.timeline();
      t1.from(overlay,{
        opacity:0,
        duration:0.3,
       x:-100,
        ease:'expoInOut'
      })
      .from("#credit-content .order1, #credit-content .order2, #credit-content .order3",
        {
          x: -40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        })
    });

     closeBtn.addEventListener("click", () => {
      let t2 = gsap.timeline();
      t2.to("#credit-content .order1, #credit-content .order2, #credit-content .order3",
        {
          x: -40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        })
      .to(overlay, {
        // scale:1.2,
        x:-40,
        opacity: 0,
        stagger:0.1,
        // duration: 0.2,
        delay:-0.3,
        ease: "expo.inOut",
        onComplete: () => {
          overlay.style.pointerEvents = "none";

          overlay.style.display = "none";
          gsap.set([overlay,"#credit-content .order1, #credit-content .order2, #credit-content .order3"], { x:0,opacity: 1 });
      
        },
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  locoInit();
  revealToSpan();
  valueSetters();
  loaderAnimation();

  imageTilt();
  hoverAnimation();
  animateContactDiv();
  animateFooter();
});

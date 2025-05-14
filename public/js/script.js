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

  const mm = gsap.matchMedia();

  mm.add("(max-width:600px)", () => {
    t1.from("#loader .child span", {
      x: 50,
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
      .to(
        "#loader",
        {
          height: 0,
          duration: 1,
          ease: Circ.easeInOut,
          onComplete: function () {
            animateHomePage();
          },
        },
        "-=0.5"
      )
      .to(
        "#red",
        {
          height: "100%",
          top: 0,
          duration: 0.2,
          delay: -0.8,
          ease: Circ.easeInOut,
        },
        "-=1"
      ) // Sync with loader
      .to("#red", {
        height: 0,
        duration: 1.3,
        ease: "expo.out",
        delay: -0.4,
        onComplete: function () {
          gsap.set("#red", { top: "100%" });
        },
      });
  });

  mm.add("(min-width:601px) and (max-width:1025px)", () => {
    let t1 = gsap.timeline();

    t1.from("#loader .child span", {
      x: 80,
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
      .to(
        "#loader",
        {
          height: 0,
          duration: 1,
          ease: Circ.easeInOut,
          onComplete: function () {
            animateHomePage();
          },
        },
        "-=0.5"
      )
      .to(
        "#red",
        {
          height: "100%",
          top: 0,
          duration: 0.2,
          delay: -0.8,
          ease: Circ.easeInOut,
        },
        "-=1"
      ) // Sync with loader
      .to("#red", {
        height: 0,
        duration: 1.2,
        ease: "expo.out",
        delay: -0.5,
        onComplete: function () {
          gsap.set("#red", { top: "100%" });
        },
      });
  });

  mm.add("(min-width: 1025px)", () => {
    t1.from("#loader .child span", {
      x: 100,
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
      .to(
        "#loader",
        {
          height: 0,
          duration: 1,
          ease: Circ.easeInOut,
          onComplete: function () {
            animateHomePage();
          },
        },
        "-=0.5"
      )
      .to(
        "#red",
        {
          height: "100%",
          top: 0,
          duration: 0.2,
          delay: -0.8,
          ease: Circ.easeInOut,
        },
        "-=1.2"
      ) // Sync with loader
      .to("#red", {
        height: 0,
        duration: 1,
        ease: "expo.out",
        delay: -0.6,
      });
  });
}

function animateHomePage() {
  let mm = gsap.matchMedia();

  mm.add("(max-width: 600px)", () => {
    // 📱 Mobile
    let t1 = gsap.timeline();

    t1.to(".nav a", {
      y: 0,
      opacity: 1,
      // delay: -0.2,
      duration: 0.8,
      stagger: 0.1,
      ease: Power1.inOut,
    })
      .to(".page1 span .child", {
        y: 0,
        duration: 1,
        delay: -1,
        stagger: 0.15,
        ease: Circ.inout,
      })

      .to(".row a", {
        y: 0,
        duration: 0.3,
        opacity: 1,
        delay: -0.7,
        stagger: 0.1,
        ease: Power1.inOut,
      })

      // Optional: Keep scroll-based ones same or simpler
      .to(".about .content p span", {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: Power1.inOut,
        duration: 1,
        scrollTrigger: {
          trigger: ".about",
          scroller: ".main",
          start: "top 40%",
          end: "top 10%",
          // toggleActions: "play none none reverse",
          scrub: 1,
        },
      })
      .to(".projects .flow h2 span", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease:Power1.inOut,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".projects",
          scroller: ".main",
          start: "top 95%",
          end: "top 70%",
          scrub: 1,
        },
      });
  });

  mm.add("(min-width: 601px) and (max-width:1025px)", () => {
    // tablets
    let t1 = gsap.timeline();
    t1.to(".nav a", {
      y: 0,
      opacity: 1,
      // delay: -0.5,
      duration: 0.5,
      stagger: 0.09,
      ease: Power1.easeInOut,
    })
      .to(".page1 span .child", {
        y: 0,
        duration: 1,
        delay: -1.1,
        stagger: 0.09,
        ease: Circ.inOut,
      })

      .to(".row a", {
        y: 0,
        duration: 0.8,
        opacity: 1,
        delay: -0.7,
        stagger: 0.15,
        ease: Power2.inOut,
      })
      .to(".row .graphic", {
        x: "-67%",
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        delay: -0.5,
        ease: Power1.Out,
      })
      .to(".about .content p span", {
        y: 0,
        opacity: 1,
        stagger: 0.16, // Creates a delay effect for each span
        ease: Power1.inOut,
        duration: 1,
        scrollTrigger: {
          trigger: ".about",
          scroller: ".main",
          start: "top 80%", // Animates when it enters 80% of the viewport
          end: "top 20%",
          scrub: 1,
        },
      })
      .to(".projects .flow h2 span", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: Power1.inOut,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".projects",
          scroller: ".main",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });
  });

  mm.add("(min-width:1025px", () => {
    // desktop
    let t1 = gsap.timeline();
    t1.to(".nav a", {
      y: 0,
      opacity: 1,
      // delay: -0.5,
      duration: 0.65,
      stagger: 0.09,
      ease: Power1.inOut,
    })
      .to(".page1 span .child", {
        y: 0,
        duration: 1.1,
        delay: -1,
        stagger: 0.1,
        ease: Circ.inout,
      })

      .to(".row a", {
        y: 0,
        duration: 0.4,
        opacity: 1,
        delay: -0.6,
        stagger: 0.15,
        ease: Power1.inOut,
      })
      .to(".row .graphic", {
        x: "-67%",
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        delay: -0.5,
        ease:  Power1.Out,
      })
      .to(".about .content p span", {
        y: 0,
        opacity: 1,
        stagger: 0.15, // Creates a delay effect for each span
        ease: Power1.inOut,
        duration: 1,
        scrollTrigger: {
          trigger: ".about",
          scroller: ".main",
          start: "top 80%", // Animates when it enters 80% of the viewport
          end: "top 20%",
          scrub: 1,
        },
      })
      .to(".projects .flow h2 span", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: Power1.inOut,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".projects",
          scroller: ".main",
          start: "top 80%",
          end: "top 10%",
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
    lerp: 0.05,
    mobile: {
      smooth: true,
      lerp: 1,
    },
    tablet: {
      smooth: true,
      lerp: 0.01,
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
  const isMobile = window.matchMedia("(max-width : 600px)").matches;

  document.querySelectorAll(".cnt").forEach((cnt) => {
    const title = cnt.querySelector(".image-title");
    const projects = document.querySelector(".projects");

    if (isMobile) {
      title.style.opacity = "1";
    }

    cnt.addEventListener("mousemove", () => {
      if (!isMobile) {
        cnt.querySelector("img").style.filter = "grayScale(100%)";
        title.style.opacity = "1";
      }
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
      if (!isMobile) {
        cnt.querySelector("img").style.filter = "grayScale(0)";
        title.style.opacity = "0";
        projects.style.backgroundColor = "#f2eae0";
      } else {
        cnt.querySelector("img").style.filter = "grayScale(0)";
        projects.style.backgroundColor = "#f2eae0";
      }
    });
  });
}
function animateContactDiv() {
  let mm = gsap.matchMedia();

  mm.add("(max-width: 600px)", () => {
    // mobile
    let t1 = gsap.timeline();
    t1.from([".contact .info", "#contact-form"], {
      y: "-30%",
      opacity: 0,
      stagger: 0.1,
      // delay: 0.3,
      ease:  Power4.inOut,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contact",
        scroller: ".main",
        start: "top 95%",
        end: "top 60%",
        scrub: 1,
      },
    });
  });

  mm.add("(min-width: 601px) and (max-width:1024px)", () => {
    let t1 = gsap.timeline();
    t1.from(".contact .info", {
      y: "-70%",
      opacity: 0,
      stagger: 0.15,
      delay: 0.2,
      ease:  Power1.inOut,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contact",
        scroller: ".main",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
    })
      .from("#contact-form", {
        y: 400,
        stagger: 0.15,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,
        ease: Power1.inOut,
        scrollTrigger: {
          trigger: ".contact .info",
          scroller: ".main",
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        },
      })
      .from(".contact-content span", {
        x: "100%",
        opacity: 0,
        stagger: 0.15,
        // delay: 0.,
        ease: Power1.inOut,
        scrollTrigger: {
          trigger: ".contact",
          scroller: ".main",
          scrub: 1,
          start: "top 95%",
          end: "top 40%",
        },
      });
  });

  mm.add("(min-width:1025px",()=>{
    let t1 = gsap.timeline();
    t1.from(".contact .info", {
      y: "-70%",
      opacity: 0,
      stagger: 0.15,
      delay: 0.2,
      ease:  Power1.inOut,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contact",
        scroller: ".main",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
    })
      .from("#contact-form", {
        y: 400,
        stagger: 0.15,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,
        ease: Power1.inOut,
        scrollTrigger: {
          trigger: ".contact .info",
          scroller: ".main",
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        },
      })
      .from(".contact-content span", {
        x: "100%",
        opacity: 0,
        stagger: 0.15,
        // delay: 0.,
        ease: Power1.inOut,
        scrollTrigger: {
          trigger: ".contact",
          scroller: ".main",
          scrub: 1,
          start: "top 95%",
          end: "top 40%",
        },
      });
  })
 
}

function animateFooter() {
  const overlay = document.getElementById("credit-overlay");
  const creditBtn = document.getElementById("creditBtn");
  const closeBtn = document.getElementById("close-btn");

  let mm = gsap.matchMedia();

  mm.add("(min-width: 601px)", () => {
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
      t2.to(
        "#credit-content .order1, #credit-content .order2, #credit-content .order3",
        {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        }
      ).to(overlay, {
        // scale:1.2,
        y: 40,
        opacity: 0,
        stagger: 0.1,
        // duration: 0.2,
        delay: -0.3,
        ease: "expo.inOut",
        onComplete: () => {
          overlay.style.pointerEvents = "none";

          overlay.style.display = "none";
          gsap.set(
            [
              overlay,
              "#credit-content .order1, #credit-content .order2, #credit-content .order3",
            ],
            { y: 0, opacity: 1 }
          );
        },
      });
    });
  });

  mm.add("(max-width:600px)", () => {
    creditBtn.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.set(overlay, { opacity: 1, display: "block" });
      overlay.style.pointerEvents = "auto";
      let t1 = gsap.timeline();
      t1.from(overlay, {
        opacity: 0,
        duration: 0.3,
        x: -100,
        ease: "expoInOut",
      }).from(
        "#credit-content .order1, #credit-content .order2, #credit-content .order3",
        {
          x: -40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    });

    closeBtn.addEventListener("click", () => {
      let t2 = gsap.timeline();
      t2.to(
        "#credit-content .order1, #credit-content .order2, #credit-content .order3",
        {
          x: -40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        }
      ).to(overlay, {
        // scale:1.2,
        x: -40,
        opacity: 0,
        stagger: 0.1,
        // duration: 0.2,
        delay: -0.3,
        ease: "expo.inOut",
        onComplete: () => {
          overlay.style.pointerEvents = "none";

          overlay.style.display = "none";
          gsap.set(
            [
              overlay,
              "#credit-content .order1, #credit-content .order2, #credit-content .order3",
            ],
            { x: 0, opacity: 1 }
          );
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

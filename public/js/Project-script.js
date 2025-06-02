function locoInit() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"), // Make sure the class matches your HTML
    smooth: true,
    lerp: 0.08, // Adjust for smoother scrolling
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
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
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
  function animatePojectPage() {
    let mm = gsap.matchMedia();
  
    
      const boxes = document.querySelectorAll(".project-box");
  
      boxes.forEach((box, i) => {
        const image = box.querySelector(".imgcnt");
        const title = box.querySelector(".desc h4");
        const desc = box.querySelector(".desc p");
  
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            scroller: ".main", // Use only if using Locomotive Scroll
            start: "top 90%",
            end:"top 70%",
            toggleActions: "play none none none",
          },
        });
  
        tl.from(
            title,
            {
              y: 40,
              opacity: 0,
              duration: 0.5,
              delay: 0.5,
              ease: Power1.inOut,
            },
            "-=0.2"
          ) // overlap
          .from(
            desc,
            {
              y: 20,
              opacity: 0,
              duration: 0.4,
              delay:0.5,
              ease: Power1.inOut,
            },
            "-=0.1"
          );
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
          start: "top 98%",
          end: "top 60%",
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
            end: "top 60%",
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
            end: "top 60%",
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
  locoInit();
  animatePojectPage();
  animateContactDiv();

  animateFooter();
});

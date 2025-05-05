function locoInit(){

    gsap.registerPlugin(ScrollTrigger);
    
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"), // Make sure the class matches your HTML
    smooth: true,
    lerp: 0.08, // Adjust for smoother scrolling
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

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

function animatePojectPage(){

  let mm= gsap.matchMedia()

  mm.add('(min-width: 769px', ()=>{

    const boxes = document.querySelectorAll(".project-box");

    boxes.forEach((box, i) => {
      const image = box.querySelector(".imgcnt");
      const title = box.querySelector(".desc h4");
      const desc = box.querySelector(".desc p");
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          scroller: ".main", // Use only if using Locomotive Scroll
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
  
      tl
        .from(title, {
          x: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.4") // overlap
        .from(desc, {
          x: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3");
    });
  })
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
document.addEventListener("DOMContentLoaded",()=>{
    locoInit()
    animatePojectPage()
    animateContactDiv()
  
    animateFooter()
})
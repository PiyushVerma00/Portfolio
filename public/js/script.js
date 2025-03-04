function valueSetters() {
  gsap.set(".nav a", { y: "-100%", opacity: 0 });
  gsap.set(".page1 .parent .child", { y: "100%" });
  gsap.set(".row .graphic", { opacity: 0});
  gsap.set(".row a", { y:"100%", opacity: 0});
  gsap.set(".about .content p span", { y:"100%", opacity: 0});
  gsap.set(".projects .flow h2 span",{y:"100%",opacity:0});
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
    x: 100,
    duration: 1,
    stagger: 0.1,
    delay: 0.6,
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
    })
    .to("#red", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1.6,
      ease: Circ.easeInOut,
    })
    .to("#red", {
      height: 0,
      duration: 1,
      delay: -1,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomePage();
      },
    });
}

function animateHomePage() {
  let t1 = gsap.timeline();
  t1.to(".nav a", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.16,
    ease: Power2.easeInOut,
  })
  .to(".page1 span .child", {
    y: 0,
    duration: 1,
    delay: -1,
    stagger: 0.2,
    ease: Power3.easeInOut,
  })
  .to(".row a",{
    y: 0,
    duration: 0.4,
    opacity: 1,
    delay: -0.5,
    stagger: 0.1,
    ease: Power3.easeInOut,
  })
  .to(".row .graphic",{
    x: "-67%", 
    opacity: 1,
    duration: 1,
    stagger: 0.15,
    delay: -0.5,
    ease: Power3.easeInOut,
  })
  .to(".about .content p span",{
   
    y: 0,
    opacity: 1,
    stagger: 0.16,  // Creates a delay effect for each span
    ease: "expo.out",
    duration: 1.5,
    scrollTrigger: {
        trigger: ".about",
        scroller: ".main",
        start: "top 80%",  // Animates when it enters 80% of the viewport
        end: "top 3%",  // Ends at 50% viewport height
        toggleActions: "play none none reverse", // Runs forward, reverses on scroll back
        scrub: 1,  // Smooth transition while scrolling
    }
  })
  .to(".projects .flow h2 span",{
      y:0,
    opacity:1,
    stagger:0.16,
    ease:"expo.out",
    duration:1.5,
    scrollTrigger:{
        trigger:".projects",
        scroller:".main",
        start:"top 80%",
        end:"top 10%",
        scrub:1

    }
  })
 

}
function locoInit(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth:  true,
      lerp: 0.1
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

    // document.querySelectorAll(".nav a").forEach((link) => {
    //     link.addEventListener("click", function (e) {
    //         e.preventDefault();
    
    //         let targetID = this.getAttribute("data-scroll"); // Get section ID
    //         let targetSection = document.querySelector(targetID); // Get section element
    
    //         if (targetSection) {
    //             console.log("Scrolling to:", targetID, targetSection);
    //             locoScroll.scrollTo(targetSection, {
    //                 duration: 800,  // Smooth scrolling duration
    //                 offset: -100,    // Adjust for fixed nav
    //                 easing: [0.25, 0.0, 0.35, 1.0] // Easing function
    //             });
    //         } else {
    //             console.error("Target section not found:", targetID);
    //         }
    //     });
    // });
   
  
    
}

function imageTilt(){
    let images = document.querySelectorAll(".image .imgcnt");
   let t1 = gsap.timeline();
   t1.from(images[0],{
    scrollTrigger:{
        trigger:images[0],
        scroller:".main",
        scrub:true
    },
    x: "-35%",
    rotate: "-20deg",
    duration:2.8
   })
    .from(images[1], {
    scrollTrigger: {
      trigger: images[1],
      scroller: ".main",
      scrub: true,
    },
    x: "-15%",
    rotate: "-28deg",
    duration: 2.8,
  })
  .from(images[2], {
    scrollTrigger: {
      trigger: images[2],
      scroller: ".main",
      scrub: true,
    },
    x: "-8%",
    rotate: "-22deg",
    duration: 2.8,
  })
  }
function hoverAnimation(){
    document.querySelectorAll(".cnt").forEach((cnt)=>{

        const title = cnt.querySelector('.image-title')
        const projects = document.querySelector('.projects')
        cnt.addEventListener('mousemove',()=>{
            cnt.querySelector('img').style.filter = "grayScale(100%)";
            title.style.opacity = "1";
            if(cnt.classList.contains("imageCnt1")){
                projects.style.backgroundColor = "#C1C6D7";
            }
            else if(cnt.classList.contains("imageCnt2")){
                projects.style.backgroundColor = "#FF99A8"; 
            }
            else if(cnt.classList.contains("imageCnt3")){
                projects.style.backgroundColor = "#DBCABD"; 
            }
            else if(cnt.classList.contains("imageCnt4")){
                projects.style.backgroundColor = "#FFBC99"; 
            }
            else if(cnt.classList.contains("imageCnt5")){
                projects.style.backgroundColor = "#E5B5B3"; 
            }
        })
    
        cnt.addEventListener("mouseleave",()=>{
            cnt.querySelector('img').style.filter = "grayScale(0)"
            title.style.opacity = '0';
            projects.style.backgroundColor = "#f0dcc5"
        })
    })
}



document.addEventListener("DOMContentLoaded",()=>{
    locoInit()
    // revealToSpan();
    // valueSetters();
    // loaderAnimation();
    imageTilt()
    hoverAnimation()
})




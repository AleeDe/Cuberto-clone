Shery.mouseFollower();
Shery.makeMagnet('.magnet');
Shery.hoverWithMediaCircle(".hvr",{videos:["/videos/0.mp4","/videos/2.mp4","/videos/3.mp4"]});



Shery.imageMasker(".mask-target" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Ali",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});



let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        
        },
      });
    });
  },
});

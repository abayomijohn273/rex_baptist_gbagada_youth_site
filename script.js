

  gsap.from(".logo-section img", {y: 0, opacity: 0, scale: 0.8});

  gsap.from(".form-section", { y: 30 });

  gsap.from(".title", { y: 0, opacity: 0, scale: 0.5});
  gsap.from(".form-section .title", { y: 30 });

  gsap.from(".under-construction-section p", { y: 0, opacity: 0, scale: 0.5, ease: "power4.inOut", });

  gsap.from(".box-section .columns:first-child", {duration: 1, x: 300, opacity: 0, scale: 0.5});

  gsap.from(".box-section .columns:last-child", {duration: 1, x: -300, opacity: 0, scale: 0.5});

  gsap.from("footer", {duration: 2, y: 50});

  gsap.from(".grid", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
  });

  
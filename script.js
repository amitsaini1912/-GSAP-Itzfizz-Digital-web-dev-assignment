// GSAP Animations for Hero Text
gsap.from(".hero-title", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce.out"
  });
  
  gsap.from(".hero-subtitle", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
  });
  
  gsap.from(".cta-button", {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    delay: 1,
    ease: "back.out(1.7)"
  });
  
  // Floating Element Animations
  gsap.to("#circle", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  
  gsap.to("#square", {
    x: 20,
    rotation: 45,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  // Mouse Movement Parallax Effect
  document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    gsap.to(".floating-element", {
      x: (x / window.innerWidth) * 50 - 25,
      y: (y / window.innerHeight) * 50 - 25,
      duration: 0.5,
      ease: "power2.out"
    });
  });
  
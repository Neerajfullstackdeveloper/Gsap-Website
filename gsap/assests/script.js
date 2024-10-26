let tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.2
})
tl.from("li",{
    y:-30,
    opacity:0,
    duration:0.2,
    stagger:1
})
tl.from(".lsec h1",{
    x:-30,
    opacity:0,
    duration:0.3,
    stagger:1
})

gsap.to(".backH1 h1",{
  transform:"translateX(-102%)",
  opacity:1,
  
  scrollTrigger:{
    trigger:".scroll",
    scroller:"body",
    start:"top 10%",
    end:"top -90%",
    scrub:2,
    pin:true,
    repeat: -1,    
  }
  
})

gsap.to(".backH2 h1",{
  transform:"translateX(100%)",
  opacity:1,
  scrollTrigger:{
    trigger:".scroll",
    scroller:"body",
    start:"top 10%",
    end:"top -90%",
    scrub:2,
    repeat: -1,
    
  }
  
})

gsap.to(".scroll .Simg1",{
  transform:"translateY(117%)",
  opacity:100,
  rotation: 360, 
  scrollTrigger:{
    trigger:".backH1",
    scroller:"body",
    start:"top 10%",
    end:"top -90%",
    scrub:2,
    pin:false,
  }
  
})



// -------------Swiper Js--------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    });
    
    //********************MOVE**********************// 
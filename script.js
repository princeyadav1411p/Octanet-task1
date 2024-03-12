var tl = gsap.timeline()
tl.from(".top,.mid", {
    y: -40,
    delay: 0.8,
    duration: 1,
    yoyo: true,
    opacity: 0,
    stagger: 0.3,
})

tl.from(".o", {
    delay: 0.8,
    duration: 1,
    scale: 1.4,
    repeat: -1,
    yoyo: true,
})

tl.from(".leaf", {
    y: -40,
    delay: 0.8,
    duration: 1,
    yoyo: true,
    opacity: 0,
    stagger: 0.3,
    rotate: 15,
    repeat: -1
})
tl.to(".f", {
    top: "110%",
    right: "40%",
    delay: 3,
    duration: 2,
    scrollTrigger: {
        trigger: ".f",
        scroller: "body",
        start: "top 0",
        scrub: 5 //smooth
    }
})

tl.from(".right1 p,.right1 h1", {
    x: 100,
    duration: 0,
    delay: 0,
    repeat: -1,
    yoyo: true,
    opacity: 0,
})
tl.from(".ora,.ora2,.ora3", {
    duration: 1,
    delay: 1,
    scale: 1.3,
    yoyo: true,
    repeat: -1,
})
tl.from(".coco,.pepsi,.fa", {
    duration: 1,
    rotate: 360,
    scale: 1.1,
    // yoyo: true,
     scrollTrigger: {
         trigger: ".mai",
         scroller: "body",
        //  markers: true,
         start: "top 70%",
         end:"top 10%",
         scrub:true
     } 
})
tl.to(".page4 p", {
    x: 100,
    delay: 1,
    duration: 1,
    yoyo: true
})


document.addEventListener('DOMContentLoaded', () =>{

    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1 ,
    {width: '100%'},
    {width: '0%', delay: 5, ease: Expo.easeInOut})

    .fromTo('.bg-video', 1 ,
    {width: '0%', opacity: 0},
    {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.nav-logo', 0.7 ,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.nav-list', 2 ,
    {y:-50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.container-item-1', 1 ,
    {width: '0%', opacity: 0},
    {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.container-item-2', 1.5 ,
    {width: '0%', opacity: 0},
    {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')


})
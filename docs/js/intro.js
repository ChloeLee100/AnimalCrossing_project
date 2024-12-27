console.clear();

function sec03Left_Swiper() {
	const swiper = new Swiper('.sec03-left.swiper', {     
		loop: true,
		speed: 1000,		
		autoplay: {
			delay: 2000,
		},
    effect: 'fade',
    fadeEffect: {
        crossFade: true, 
    },
  });
};

sec03Left_Swiper();

function sec03Right_Swiper() {
	const swiper = new Swiper('.sec03-right.swiper', {     
		loop: true,
		speed: 1000,		
		autoplay: {
			delay: 2000,
		},
    effect: 'fade',
    fadeEffect: {
        crossFade: true, 
    },
  });
};

sec03Right_Swiper();
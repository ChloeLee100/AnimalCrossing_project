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

function sec04Left_Swiper() {
	const swiper = new Swiper('.sec04-left.swiper', {     
		loop: true,
		speed: 1000,		
		autoplay: {
			delay: 2200,
		}
  });
};

sec04Left_Swiper();

function sec04Mid_Swiper() {
	const swiper = new Swiper('.sec04-mid.swiper', {     
		loop: true,
		speed: 1000,		
		autoplay: {
			delay: 2400,
		}
  });
};

sec04Mid_Swiper();

function sec04Right_Swiper() {
	const swiper = new Swiper('.sec04-right.swiper', {     
		loop: true,
		speed: 1000,		
		autoplay: {
			delay: 2100,
		}
  });
};

sec04Right_Swiper();
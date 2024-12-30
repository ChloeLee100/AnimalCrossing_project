console.clear();

function mainImg_Swiper() {
	const swiper = new Swiper('.main-img.swiper', {     
		loop: true,
		speed: 1000,		
		autoplay: {
			delay: 2300,
		},
  });
};

mainImg_Swiper();
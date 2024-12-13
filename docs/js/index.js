console.clear();

function box01Img_Swiper() {
	const swiper = new Swiper('.box-01-img.swiper', {     
		loop: true,
		speed: 1000,		
		autoplay: {
			delay: 2500,
		}
  });
};

box01Img_Swiper();

function box02Img_Swiper() {
	const swiper = new Swiper('.box-02-img.swiper', {     
		loop: true,
		speed: 1000,		
		autoplay: {
			delay: 2000,
		}
  });
};

box02Img_Swiper();
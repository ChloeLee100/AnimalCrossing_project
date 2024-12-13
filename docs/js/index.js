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

document.addEventListener('DOMContentLoaded', box01Img_Swiper);
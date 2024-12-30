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

function showPaging() {
  const paging01 = document.querySelector(".paging-01");
  const paging02 = document.querySelector(".paging-02");

  paging02.style.display = "none";

  $(".swiper-next").click(function () {
    paging01.style.display = "none";
    paging02.style.display = "block";
  });

  $(".swiper-prev").click(function () {
    paging01.style.display = "block";
    paging02.style.display = "none";
  });
};

showPaging();

function showTab() {
  const tabs = document.querySelectorAll(".tab");
  const buttons = document.querySelectorAll(".paging ul li");
  const contents = document.querySelector(".body-wrap-02");

  tabs.forEach((tab, index) => {
    if (index === 0) {
      tab.style.display = "grid"; 
    } else {
      tab.style.display = "none";
    }
  });

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      tabs.forEach((tab) => {
        tab.style.display = "none";
      });

      if (tabs[index]) {
        tabs[index].style.display = "grid";
      }

      buttons.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.style.borderRadius = "";
      });

      button.style.backgroundColor = "#FFCA28";
      button.style.borderRadius = "2rem";

      contents.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
};

showTab();
console.clear();

function MobileMenu() {
	$(".menu_btn").click(function () {
		const menuItems = document.querySelector('.mo-header_wrap');

    if (menuItems.classList.contains('active')) {
      menuItems.classList.remove('active');
    } else {
      menuItems.classList.add('active');
    }
	});
}

MobileMenu();
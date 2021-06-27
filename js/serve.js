document.querySelector('.year').innerHTML = new Date().getFullYear();

jQuery(function ($) {
	var $nav = $('.nav-container-cus')
	var $win = $(window)
	var winH = $win.height() // Get the window height.

	$win
		.on('scroll', function () {
			if ($(this).scrollTop() > winH * 0.01) {
				$nav.addClass('color')
			} else {
				$nav.removeClass('color')
			}
		})
		.on('resize', function () {
			// If the user resizes the window
			winH = $(this).height() // you'll need the new height value
		})
})

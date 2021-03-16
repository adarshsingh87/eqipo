
$(window).scroll(secCounter);

function secCounter() {
		if (elementInViewport(document.querySelector('.cirecle-percentage'))) {
			$(window).off("scroll", secCounter);
			$('.trigger').addClass('animate');
		$('.temp').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
	}
  //   if ($(window).scrollTop() > $('.cirecle-percentage').scrollTop()) {
	// 		$(window).off("scroll", secCounter);
	// 	$('.temp').each(function () {
  //       var $this = $(this);
  //       jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
  //           duration: 3000,
  //           easing: 'swing',
  //           step: function () {
  //               $this.text(Math.ceil(this.Counter));
  //           }
  //       });
  //   });
	// }
}


$(window).scroll(startCounter);
$(window).scroll(secCounter);

function startCounter() {
    if (elementInViewport(document.querySelector('.teams-cont'))) {
        $(window).off("scroll", startCounter);
			var group93 = document.querySelector('#Group-93');
      group93.style.opacity = '1';
			var group94 = document.querySelector('#Group-94');
      group94.style.opacity = '1';
			var group95 = document.querySelector('#Group-95');
      group95.style.opacity = '1';
			var group96 = document.querySelector('#Group-96');
      group96.style.opacity = '1';
			var group97 = document.querySelector('#Group-97');
      group97.style.opacity = '1';
			var group98 = document.querySelector('#Group-98');
      group98.style.opacity = '1';
			var group99 = document.querySelector('#Group-99');
      group99.style.opacity = '1';
			var group100 = document.querySelector('#Group-100');
      group100.style.opacity = '1';
			var group101 = document.querySelector('#Group-101');
      group101.style.opacity = '1';
			var group102 = document.querySelector('#Group-102');
      group102.style.opacity = '1';
			var group103 = document.querySelector('#Group-103');
      group103.style.opacity = '1';
			var group92 = document.querySelector('#Group-92');
      group92.style.opacity = '1';
			var group87 = document.querySelector('#Group-87');
      group87.style.opacity = '1';
			var group88 = document.querySelector('#Group-88');
      group88.style.opacity = '1';
			var group89 = document.querySelector('#Group-89');
      group89.style.opacity = '1';
			var group90 = document.querySelector('#Group-90');
      group90.style.opacity = '1';
			var group91 = document.querySelector('#Group-91');
      group91.style.opacity = '1';
	}
}

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
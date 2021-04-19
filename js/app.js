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

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

$(window).scroll(secCounter);

var srcOnlyOnce = 0

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
	else if (document.querySelector('.desk-only') || document.querySelector('.mob-only')) {
		if (elementInViewport(document.querySelector('.desk-only')) && srcOnlyOnce===0) {
		document.getElementById('desk-iframe').src = './assets/animated-svg.svg'
		srcOnlyOnce=1
	}
	else if (elementInViewport(document.querySelector('.mob-only')) && srcOnlyOnce===0) {
    document.getElementById('mob-iframe').src = './assets/animated-svg.svg'
    srcOnlyOnce=1
	}}
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

// $(window).on('scroll', function() {
//   var position = $(this).scrollTop();
//   if( position >= $('.circle-wrap').scrollTop() ) {
//     $('.trigger').addClass('animate');
//   } else {
//     $('.trigger').removeClass('animate');
//   }
// } );

// $(window).scroll(startCounter);
// function startCounter() {
//     if ($(window).scrollTop() > 2000) {
//         $(window).off("scroll", startCounter);
//         $('.temp').each(function () {
//             var $this = $(this);
//             jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//                 duration: 3000,
//                 easing: 'swing',
//                 step: function () {
//                     $this.text(Math.ceil(this.Counter));
//                 }
//             });
//         });
//     }
// }

function openCity(evt, cityName) {
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName('tabcontent')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none'
	}
	tablinks = document.getElementsByClassName('tablinks')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active-perf', '')
	}
	document.getElementById(cityName).style.display = 'flex'
	evt.currentTarget.className += ' active-perf'
}

const links = document.querySelectorAll('.tablinks')
if ( links[0] != undefined) {
	links[0].click()
}

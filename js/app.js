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

$('.sec-carousel').owlCarousel({
	stagePadding: 15,
	margin: 10,
	nav: true,
	navText: [
		'<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
		'<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>',
	],
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
	loop: true,
	responsive: {
		0: {
			items: 1,
		},
		640: {
			items: 1,
		},
		960: {
			items: 1,
		},
	},
} )

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
links[0].click()
// 

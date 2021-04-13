window.onload = (e) => {
  if (window.innerWidth >= 1200) {
//   jqSimpleConnect.connect(".elemA",".elemB", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemB",".elemC", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemC",".elemD", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemD",".elemH", {
//   color:'green',
//   radius: 3,
//   anchorA: 'vertical',
//   anchorB: 'vertical',
//   roundedCorners: true
// });

// jqSimpleConnect.connect(".elemE",".elemF", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemF",".elemG", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemG",".elemH", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemI",".elemJ", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemI",".elemE", {
//   color:'green',
//   radius: 3,
//   anchorA:'horizontal',
//   anchorB:'vertical'
// });

// jqSimpleConnect.connect(".elemJ",".elemK", {
//   color:'green',
//   radius: 3,
// });

    jqSimpleConnect.connect(".circle-connect-1",".circle-border", {
  color:'green',
  radius: 3,
  anchorA:'horizontal',
  anchorB:'vertical'
});

  jqSimpleConnect.connect(".circle-connect-2",".circle-border", {
  color:'green',
  radius: 3,
  anchorA:'horizontal',
  anchorB:'vertical'
});
}
}

// else if (window.innerWidth < 1200 && window.innerWidth > 991) {
//   jqSimpleConnect.connect(".elemA",".elemB", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemB",".elemC", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemC",".elemF", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemD",".elemE", {
//   color:'green',
//   radius: 3,
//   anchorA: 'vertical',
//   anchorB: 'vertical',
//   roundedCorners: true
// });

// jqSimpleConnect.connect(".elemD",".elemG", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemE",".elemF", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemG",".elemH", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemI",".elemH", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemK",".elemJ", {
//   color:'green',
//   radius: 3,
// });

// jqSimpleConnect.connect(".elemI",".elemK", {
//   color:'green',
//   radius: 3,
//   anchorB:'horizontal',
//   anchorA:'vertical'
// });
// }


// function secCounter() {
// 		if (elementInViewport(document.querySelector('.cirecle-percentage'))) {
// 			$(window).off("scroll", secCounter);
// 			$('.trigger').addClass('animate');
// 		$('.temp').each(function () {
//         var $this = $(this);
//         jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//             duration: 3000,
//             easing: 'swing',
//             step: function () {
//                 $this.text(Math.ceil(this.Counter));
//             }
//         });
//     });
// 	}
//   //   if ($(window).scrollTop() > $('.cirecle-percentage').scrollTop()) {
// 	// 		$(window).off("scroll", secCounter);
// 	// 	$('.temp').each(function () {
//   //       var $this = $(this);
//   //       jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//   //           duration: 3000,
//   //           easing: 'swing',
//   //           step: function () {
//   //               $this.text(Math.ceil(this.Counter));
//   //           }
//   //       });
//   //   });
// 	// }
// }

const laptopSer = document.getElementById('laptop-hex-stuff')
// const tabSer = document.getElementById('tab960-hex-stuff')
const phoneSer = document.getElementById('phone-hex-stuff')

if ( window.innerWidth > 1440 ) {
  laptopSer.style.display = 'block'
  // tabSer.style.display = 'none'
  phoneSer.style.display = 'none'
} else if ( window.innerWidth <= 1440 && window.innerWidth > 960 ) {
  phoneSer.style.display = 'none'
  laptopSer.style.display = 'block'
  // tabSer.style.display = 'block'
} else {
  phoneSer.style.display = 'block'
  laptopSer.style.display = 'none'
  // tabSer.style.display = 'none'
}

$('.animated').bind("mousewheel", function() {
    return false;
});

let i = 0
function IndexAnimation () {
  const animated = document.getElementsByClassName('animated')[0]
  // animated.classList.value = [`animated test-${i}`]
  animated.scrollTo(0, i * animated.offsetHeight)
  if ( i < 5 ) {
    i = i+1
  } else if ( i === 5 ) {
    i = 0
  } else {
    i = 0
  }
}
IndexAnimation()
setInterval(IndexAnimation, 3500)

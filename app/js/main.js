// $(document).ready(function(){
//   $('.banner-slider').slick({
//     infinite: true,
//     centerMode: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'ease',
//     autoplay: true,
//     arrows: true,
//     vertical: true,
//     dotsClass: 'carousel-dots',
//     autoplaySpeed: 4000
//   });
// })

$(document).ready(function(){
	$(".mobile-button").on("click", function(){
		$(".menu").toggle()
	})
})

// $(document).ready(function(){
// 	$(window).on("resize", function(){
// 		if(window.innerWidth <= 969){
// 			$(".menu").css("display", "none")
// 		} else if(window.innerWidth >= 970){
// 			$(".menu").css("display", "flex")
// 		}
// 	})
// })


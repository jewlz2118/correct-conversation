$(document).ready(function () {


//		sticky navigation

$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() >= 650) {
				$('nav').addClass('sticky');
			} else {
//				$('nav').removeClass('sticky');
			}
		});
	});
	
	$(".burger-nav").on("click", function(){
		
		$(".responsive").toggleClass("open");
		
	});
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() >= 650) {
				$('.responsive').addClass('sticky');
			} else {
//				$('.responsive').removeClass('sticky');
			}
		});
	});

	//	scrolling

	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	})

	//hero enter button



});
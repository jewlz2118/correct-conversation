$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() >= 0) {
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
			if ($(this).scrollTop() >= 0) {
				$('.responsive').addClass('sticky');
			} else {
//				$('.responsive').removeClass('sticky');
			}
		});
	});

	
	



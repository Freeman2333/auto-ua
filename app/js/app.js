$(document).ready(function(){
	$(".js-slider").slick({
		infinite: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows:  true,
		prevArrow:".slider-nav__prev",
		nextArrow:".slider-nav__next",
		responsive: [{
			breakpoint: 1396,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},{
			breakpoint: 1100,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

		$(".scroll-top").on('click',function (e) {
			e.preventDefault()
			$('html,body').animate({scrollTop:0},900)
	})

	// scroll to section 

	$(".nav").on("click",".nav-link", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top+40}, 900);
  });


		// sticky navbar
		var navHeight = $(".nav").outerHeight(true);
		$("<div class='clone-nav'>").insertBefore(".nav").css('height', navHeight).hide();

		function showNav(){
			if ($(window).scrollTop()>$('.banner-left').offset().top) {
				$(".nav").addClass('active');
				$(".clone-nav").show()
			} else{
				$("nav").removeClass('active')
				$(".clone-nav").hide();
			}
		}

		showNav()

		// active ancor

		function detectActiveSection(){
			var advantagesY = $('.advantages').offset().top
			var priceY = $('.price').offset().top
			var reviewsY = $('.reviews-section').offset().top
			var windowY = $(window).scrollTop()
			if(windowY<advantagesY){
				$('.nav-item').removeClass('active')
				$("[href='#header']").parent().addClass("active")
			}
			else if (advantagesY<windowY && windowY<priceY){
				$('.nav-item').removeClass('active')
				$("[href='#advantages']").parent().addClass("active")
			}
			else if (priceY<windowY && windowY<reviewsY){
				$('.nav-item').removeClass('active')
				$("[href='#price']").parent().addClass("active")
			}
			else if (windowY>reviewsY){
				$('.nav-item').removeClass('active')
				// alert("reviews")
				$("[href='#reviews']").parent().addClass("active")
			}
		}

		detectActiveSection();
		
		$(window).scroll(function () {
			showNav();
			detectActiveSection();
		})

		// popups

		$('.popup-link').magnificPopup({
			type: 'inline',
		});

		$('.close-popup').on('click',function () {
			$.magnificPopup.close();
	})

		// form post ajax

	$("form").submit(function() { //Change
		var th = $(this);
		alert('Спасибо!')
		th.trigger("reset");
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert('Спасибо!!!')
			th.trigger("reset");
		});
		return false;
	});

})
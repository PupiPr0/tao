$(document).ready(function () {

	// SWIPER SERVERS

	var servers__thumbs = new Swiper(".servers__thumbs-slider", {
		//loop: true,
		spaceBetween: 5,
		slidesPerView: 3,
		//initialSlide: 1,
		allowTouchMove: false,

		navigation: {
			nextEl: ".servers__thumbs .swiper-button-next",
			prevEl: ".servers__thumbs .swiper-button-prev",
		},
	});

	var servers__slider = new Swiper(".servers__slider", {
		//loop: true,
		spaceBetween: 0,
		slidesPerView: 1,
		//initialSlide: 0,
		/*thumbs: {
			swiper: servers__thumbs,
		},*/
	});

	// Колин фикс
	servers__thumbs.on("slideChangeTransitionStart", (e) => {
		servers__slider.slideTo(e.activeIndex, 500, false);
	});

	servers__slider.on("slideChangeTransitionStart", (e) => {
		servers__thumbs.slideTo(e.activeIndex, 500, false);
		$(".servers__thumbs-slider .swiper-slide").removeClass("swiper-slide-active");
		$(".servers__thumbs-slider .swiper-slide")
			.eq(e.activeIndex)
			.addClass("swiper-slide-active");
	});

	servers__thumbs.on("click", (e) => {
		$(".servers__thumbs-slider .swiper-slide").removeClass("swiper-slide-active");
		$(".servers__thumbs-slider .swiper-slide")
			.eq(e.clickedIndex)
			.addClass("swiper-slide-active");
		servers__slider.slideTo(e.clickedIndex, 500, false);
	});



	// SWIPER SERVERS

	var news__slider = new Swiper(".news__slider", {
		//loop: true,
		spaceBetween: 0,
		slidesPerView: 1,
		//initialSlide: 0,
		pagination: {
			el: ".news__slider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".news__slider .swiper-button-next",
			prevEl: ".news__slider .swiper-button-prev",
		},
	});

	// SWIPER SHOP

	var shop__slider = new Swiper(".shop__slider", {
		//loop: true,
		spaceBetween: 15,
		slidesPerView: 1,
		//initialSlide: 0,
		pagination: {
			el: ".shop__slider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".shop__slider .swiper-button-next",
			prevEl: ".shop__slider .swiper-button-prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},

			1240: {
				slidesPerView: 4,
			},
		},
	});

	// SWIPER STREAMS

	var streams__slider = new Swiper(".streams__slider", {
		//loop: true,
		spaceBetween: 15,
		slidesPerView: 1,
		//initialSlide: 0,
		watchSlidesVisibility: true,
		pagination: {
			el: ".streams__slider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".streams__slider .swiper-button-next",
			prevEl: ".streams__slider .swiper-button-prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},

			1240: {
				slidesPerView: 4,
			},
		},
	});

	var streams = [];
	$(".streams .swiper-slide").each(function () {
		streams.push($(this).find(".streams__slider-item-content").html());
		if (!$(this).hasClass("swiper-slide-visible")) {
			$(this).find(".streams__slider-item-content").html("");
		}
	});

	streams__slider.on("slideChangeTransitionEnd", (e) => {
		$(".streams .swiper-slide").each(function () {
			if ($(this).hasClass("swiper-slide-visible")) {
				if (!$(this).find(".streams__slider-item-content").html()) {
					$(this).find(".streams__slider-item-content").html(streams[$(this).index()]);
				}
			}
			else {
				$(this).find(".streams__slider-item-content").html("");
			}
		});
	});


	// Main stat toggle class

	$('.stat').MVisionToggleClass({
		classButton: 'stat__button',
		toggleClassButton: 'active',
		dataButtonAttr: 'data-open-tab',
		classBox: 'stat__table',
		toggleClassBox: 'active',
		dataBoxAttr: 'data-name-tab',
		defaultElement: true,
		defaultIndexElement: 0,
		//ancoreLinks: true,
	});


	// Inner features toggle class

	$('.inner-wiki').MVisionToggleClass({
		classButton: 'inner-wiki__toggle-item',
		toggleClassButton: 'active',
		dataButtonAttr: 'data-open-tab',
		classBox: 'inner-wiki__content-item',
		toggleClassBox: 'active',
		dataBoxAttr: 'data-name-tab',
		defaultElement: true,
		defaultIndexElement: 0,
		ancoreLinks: true,
	});


	// при клике на элемент с классом "scroll-top"
	$('.scroll-top').click(function () {
		// анимация скролла к началу страницы
		$('html, body').animate({ scrollTop: 0 }, 1000);
		return false;
	});

});



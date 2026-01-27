$(document).ready(function () {

	$('.nav__open-menu').click(function (event) {
		if ($('.nav__menu').is(':hidden')) {
			$('.nav__menu').slideDown(300, function () {
				$(this).css('display', 'block');
			});
			$(this).addClass('active');
		}
		else {
			$('.nav__menu').slideUp(300, function () {
				$(this).css('display', 'none');
			});
			$(this).removeClass('active');
		}
	});

	$(document).mouseup(function (e) {
		if (!$('.nav__open-menu').is(e.target) && !$('.nav__menu').is(e.target) && $('.nav__menu').has(e.target).length === 0 && $(".nav__open-menu").is(":visible")) {
			$(".nav__open-menu").removeClass('active');
			$('.nav__menu' + ':visible').slideUp(300, function () {
				$(this).css('display', 'none');
			});
		}
	});

	$(window).resize(function () {
		if (!$(".nav__open-menu").is(":visible")) {
			$(".nav__menu").removeAttr("style");
			$(".nav__open-menu").removeClass('active');
		}
	});

	$('.drop-button').click(function () {

		event.preventDefault();

		$(this).parent().parent().find('.drop-box').not($(this).parent().children('.drop-box')).slideUp(300, function () {
			$(this).css('display', 'none');
		});
		$(this).parent().parent().find('.drop-button').not($(this).parent().children('.drop-button')).parent().removeClass('active');

		if (!$(this).parent().hasClass('active')) {
			$(this).parent().children('.drop-box').slideDown(300, function () {
				$(this).css('display', 'block');
			});
			$(this).parent().addClass('active');
		}
		else {
			$(this).parent().children('.drop-box').slideUp(300, function () {
				$(this).css('display', 'none');
			});
			$(this).parent().removeClass('active');
		}
	});

	$(document).mouseup(function (e) {
		if (!$('.drop-button').is(e.target) && $(".drop-button").has(e.target).length === 0 && $(".drop-box").has(e.target).length === 0) {

			$(".drop-box").slideUp(300, function () {
				$(this).css('display', 'none');
			});

			$(".drop-box").parent().removeClass("active");
		}
	});

	checkNavScroll();

	$(document).scroll(function () {
		checkNavScroll();
	});

});


function checkNavScroll() {
	if ($(document).scrollTop() > 0)
		$(".nav").addClass("nav--sticky");
	else
		$(".nav").removeClass("nav--sticky");
}
var doc = document
	, $doc = $(document)
	, ths = $(this);
$(doc).ready(function () {
	$(window).on('load',function () {
		setTimeout(function () {
			$('.preloader').fadeOut('slow', function () {});
		}, 100);
	});
	var touchMenu = $('.touch_menu')
		, navbarTop = $('.navbar_top')
		, touchMenuInner = $('.touch_menu_inner_cont')
		, touchFirstChild = $('div.touch_menu_inner_cont>i:first-child')
		, touchSecondChild = $('div.touch_menu_inner_cont>i:nth-child(2)')
		, touchThirdChild = $('div.touch_menu_inner_cont>i:last-child')
		, mainHeader = $('.menu');
	touchMenu.on('click', function (e) {
		e.preventDefault();
		ths.slideToggle(0, function () {
			navbarTop.toggleClass('flex').css('display', '');
			touchFirstChild.toggleClass('rotatorClass');
			touchSecondChild.toggleClass('none');
			touchThirdChild.toggleClass('rotatorReversClass');
		})
	})
	mainHeader.mouseleave(function () {
		navbarTop.removeClass('flex');
		touchFirstChild.removeClass('rotatorClass');
		touchSecondChild.removeClass('none');
		touchThirdChild.removeClass('rotatorReversClass');
	})
	var exitBtn = $('.exit-btn')
		, fixedOverlay = $('.fixed_overlay')
		, feedBackModal = $('.feedback_modal_cont')
		, feedBackLink = $('.feed_back_link')
		, submitBtn = $('.submit-btn')
		, feedbackForm = $('#feedback_form')
		, feedbackFormInput = $('#feedback_form > div > input');
	exitBtn.on('click', function () {
		fixedOverlay.removeClass('block').addClass('none').fadeOut(400);
	})
	feedBackLink.on('click', function () {
		fixedOverlay.removeClass('none').addClass('block').fadeIn(400);
	})
	$('.slider_inner').slick({
		slidesToShow: 1
		, slidesToScroll: 1
		, autoplay: true
		, autoplaySpeed: 4000
		, fade: true
		, speed: 500
			//, adaptiveHeight: true
			
		, centerMode: true
	, });
})
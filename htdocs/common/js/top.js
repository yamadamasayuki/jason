$(function(){

var
$win = $(window),
winH = $win.height(),
isPC = window.matchMedia('(min-width:768px)').matches;
breakpoint = 768;

var
$product = $('#top-product'),
productTop = $product.offset().top,
$technology = $('#top-technology'),
technologyTop = $technology.offset().top,
$works = $('#top-works'),
worksTop = $works.offset().top,
$about = $('#top-about'),
aboutTop = $about.offset().top,
$news = $('#top-news'),
newsTop = $news.offset().top;





//---------------------------------------------------
// Slider
//---------------------------------------------------

// var bxOptions = {
// 	mode: 'horizontal',
// 	speed: 800,
// 	easing: 'ease',
// 	infiniteLoop: true,
// 	pager: true,
// 	pagerCustom: '#top-pager',
// 	controls: false,
// 	auto: false,
// 	pause: 5000,
// 	autoDirection: 'prev',
// 	onSlideBefore: function() {
// 		TweenMax.to('#mask1a', .5, {transform:'scale(1,1)', ease: Expo.easeOut});
// 	},
// 	onSlideAfter: function() {
// 		TweenMax.to('#mask1a', .5, {transform:'scale(0,1)', ease: Expo.easeOut});
// 	}
// }
//
// var
// $topslider = $('#topslider');
// topslider = $topslider.bxSlider(bxOptions);

// $('#top-pager').hover(
// 	function() {
// 		topslider.stopAuto();
// 	},
// 	function() {
// 		topslider.startAuto();
// 	}
// );



//---------------------------------------------------
// Scroll Actions
//---------------------------------------------------

// Tween Set
//---------------------------------------------------

// // Main Visual
// var tl1 = new TimelineMax({
// 	onComplete : function(){
// 		$('#top-pager, .l-anchor').fadeIn(800);
// 		$('#mask1a').css({'transform-origin': 'left center'});
// 		// topslider.startAuto();
// 	}
// })
// .add(TweenMax.to('#mask1a', .5, {transform:'scale(0,1)', ease: Expo.easeOut}), .7)
// .add(TweenMax.from('.p-mv__accent,.p-slider__type, .p-slider__ttl, .p-slider__txt', .8, {transform:'scale(0,1)', ease: Expo.easeOut}), 1.5)
// .add(TweenMax.to('#mask1b, #mask1c, #mask1d', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 2.1)
//
//
//
// // Product
// var tl2 = new TimelineMax({
// 	paused : true
// })
// .add(TweenMax.to('#mask2a', .6, {transform:'scale(0,1)', ease: Expo.easeOut}), 0)
// .add(TweenMax.to('#mask2b', 1, {transform:'scale(0,1)', ease: Expo.easeOut}), .5)
// .add(TweenMax.from('.p-topproduct__lst', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1)
// .add(TweenMax.to('.p-topproduct__mask', .9, {transform:'scale(0,1)', ease: Expo.easeOut}), 1.5)
//
//
//
// // Technology
// var tl3 = new TimelineMax({
// 	paused : true,
// 	onComplete : function(){
// 		$('.p-toptechnology__btn').animate({opacity:1}, 800);
// 	}
// })
// .add(TweenMax.to('#mask3a', .6, {transform:'scale(0,1)', ease: Expo.easeOut}), 0)
// .add(TweenMax.from('.p-toptechnology__body', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), .5)
// .add(TweenMax.from('.p-toptechnology__ttl, .p-toptechnology__txt, .p-toptechnology__more', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1)
// .add(TweenMax.to('#mask3b', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1.5)
// .add(TweenMax.to('#mask3c', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1.5)
// .add(TweenMax.to('.p-toptechnology__mask', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1.5)
//
//
//
// // Works
// var tl4 = new TimelineMax({
// 	paused : true
// })
// .add(TweenMax.to('#mask4a', .6, {transform:'scale(0,1)', ease: Expo.easeOut}), 0)
// .add(TweenMax.from('#mask4b', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), .5)
// .add(TweenMax.from('.elm4c', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), .5)
// .add(TweenMax.from('.c-olst__txtarea', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1)
// .add(TweenMax.to('.p-topworks__mask1', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1)
// .add(TweenMax.to('.p-topworks__mask2', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1.5)
//
//
//
// // About
// var tl5 = new TimelineMax({
// 	paused : true
// })
// .add(TweenMax.to('#mask5a', .6, {transform:'scale(0,1)', ease: Expo.easeOut}), 0)
// .add(TweenMax.to('.p-topabout__mask1', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), .5)
// .add(TweenMax.from('.p-topabout__info', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1)
// .add(TweenMax.from('.p-topabout__more', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1)
// .add(TweenMax.to('.p-topabout__mask2', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1.5)
//
//
//
// // News
// var tl6 = new TimelineMax({
// 	paused : true
// })
// .add(TweenMax.from('#top-news .l-topsubsection__header', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 0)
// .add(TweenMax.from('#top-news .l-topsubsection__body', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 0)
// .add(TweenMax.from('#top-news .l-topsubsection__ttl', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 0)
// .add(TweenMax.to('#mask6a', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), .5)
// .add(TweenMax.from('.p-topnews__more', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1)
// .add(TweenMax.to('.p-topnews__mask', .7, {transform:'scale(0,1)', ease: Expo.easeOut}), 1.5)
//
//
//
// // Actions
// //---------------------------------------------------
//
// $win.on('scroll load', function(){
//
// var
// scrollTop = $win.scrollTop(),
// winHalf = winH - Math.floor(winH / 2);
// showPos = scrollTop + winH - winHalf;
//
// if(showPos >= productTop) {
// 	tl2.play();
// }
// if(showPos >= technologyTop) {
// 	tl3.play();
// }
// if(showPos >= worksTop) {
// 	tl4.play();
// }
// if(showPos >= aboutTop) {
// 	tl5.play();
// }
// if(showPos >= newsTop) {
// 	tl6.play();
// }
//
//
//
// });





// Pagetop change Color (Scroll Magic)
//---------------------------------------------------

var $anchor = $('#l-anchor');

var controller1 = new ScrollMagic.Controller({
	globalSceneOptions: {
		duration: '72%'
	}
});

var controller2 = new ScrollMagic.Controller({
	globalSceneOptions: {
		duration: '112%'
	}
});

var scene1 = new ScrollMagic.Scene({
	triggerElement: '.p-topproduct__bg'
})
.setClassToggle('#l-anchor', 'is-white')
.addTo(controller1);

var scene2 = new ScrollMagic.Scene({
	triggerElement: '.p-topworks'
})
.setClassToggle('#l-anchor', 'is-white')
.addTo(controller2);






//---------------------------------------------------
// Resize Actions
//---------------------------------------------------

var
$productBg = $('.p-topproduct__bg'),
$productLst = $('.p-topproduct__lst');

$win.on('resize load', function(){

	pLstH = $productLst.outerHeight(),
	pBgH = $productBg.outerHeight(),
	diff = Math.floor(pBgH - pLstH);

	if(diff >= 0) {
		$product.css({'margin-bottom': diff});
	} else {
		$product.removeAttr('style');
	}
});








});//All finished

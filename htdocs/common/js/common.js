//common.js

$(function(){

var
$win = $(window),
winH = $win.height(),
isPC = window.matchMedia('(min-width:768px)').matches;
breakpoint = 768;



//---------------------------------------------------
// Smooth Scroll
//---------------------------------------------------

$('a[href^="#"]').on('click', function(){
	var href = $(this).attr('href');
	var target = $(href == '#' || href == '' ? 'html' : href);
	var position = (href == '#top') ? 0 : target.offset().top;
	$('html, body').stop(false,false).animate({scrollTop:position}, 700);
	return false;
});



//---------------------------------------------------
// slider
//---------------------------------------------------

$('#mv-slider').bxSlider({
	mode: 'horizontal',
	speed: 500,
	easing: 'ease',
	pagerCustom: '#pager',
	controls: false,
	auto: true,
	pause: 4000
});






});

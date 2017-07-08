$(function(){

	var
	$win = $(window),
	winH = $win.height(),
	isPC = window.matchMedia('(min-width:768px)').matches;
	breakpoint = 768;



//Smooth Scroll
// -------------------------------------------
var smoothScroll = function(){
	$('a[href^="#"]').on('click', function(){
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var headerH = $('.header').height();
		var position = target.offset().top - headerH;
		$('html, body').stop(false,false).animate({scrollTop:position}, 700);
		return false;
	});
}

smoothScroll();



var ftrNav = $('#navigator');

if(ftrNav.length > 0){
	$win.on('scroll load', function(){
		var
		scrollTop = $win.scrollTop(),
		headerH = $('.header').height(),
		ftrTop = $('.footer').offset().top,
		showHeight = 100;

		if(ftrTop < scrollTop + winH - showHeight){
			ftrNav.addClass('is-active');
			$('.enefrog-jump').removeClass('is-hiding').css({opacity:1});
			$('.pagetop a').on('click', function(){
				if($('#navigator').hasClass('is-active')){
					$('html, body').stop(false,false).animate({scrollTop:0}, 700);
				}
			});
		} else {
			ftrNav.removeClass('is-active');
			$('.enefrog-jump').addClass('is-hiding');
		}
	});
}



$win.on('load resize', function(){
	var winW = $win.width();

	if(winW > breakpoint){
		$('.header__nav').css({display:'block'});
	} else {
		$('.header__nav').css({display:'none'});
	}

	var
	contentW = 1200;
	articleW = 1240 - 120;
	cableCW = (winW - contentW) / 2 + 3;
	cableAW = (winW - articleW) / 2 + 3;
	$('.cable-start, .cable-index-start, .cable-about-start, .cable-pagetop').css({width:cableCW});
	$('.cable-article-start').css({width:cableAW});

});



});

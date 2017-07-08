$(function(){

var
$win = $(window),
winH = $win.height(),
isPC = window.matchMedia('(min-width:768px)').matches;
breakpoint = 768;

var
$topList = $('#mv-slider');

$topList.bxSlider();


});//All finished

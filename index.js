$(function() {
var aboutMePosition = $('.hero-text').position().top;
$(window).scroll(function () {
var currentPosition = $(this).scrollTop();
if (currentPosition >= aboutMePosition) {
   $('.topnav').addClass('changeColor')
} else {
   $('.topnav').removeClass('changeColor')
}
});
});

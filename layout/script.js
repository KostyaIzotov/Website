var $header = $(".header")
var scroll = 150
var active = "active"
$(window).scroll(function() {
  if ($(window).scrollTop() > scroll) {
    $header.addClass(active)
  } else {
    $header.removeClass(active)
  }
})
// скролл до элемента 
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
$(document).ready(function() {

	$('.header__burger').click(function(event) {
		$('.header__burger,.header__list,.header__social').toggleClass('active');
		$('body').toggleClass('lock');
	});

});


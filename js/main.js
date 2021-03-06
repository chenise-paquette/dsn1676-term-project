
var $menuBtn = $('.menu-btn');
var $fullList = $('.full-list');

var $tabs = $('.tabs');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $button = $('.button');

var $navList = $('.nav-list');
var $scrolldown = $('.scrolldown');
var $scrollup = $('.scrollup');

$menuBtn.on('click', function () {
    $fullList.toggleClass('js-menu-open');
});
    
$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    
    $panel.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
    
    $tabs.find('.js-current').removeClass('js-current');
    $(this).addClass('js-current');
    
});

$btnBounce.on('click', function () {
   $button.toggleClass('js-circle-bounce'); 
});

$button.on('webkitAnimationEnd animationend', function () {
    $button.removeClass('js-button-bounce');
});

$navList.localScroll();
$scrolldown.localScroll();
$scrollup.localScroll();

var $iconsSection = $(".icons");

$iconsSection.waypoint(function () {
    $iconsSection.toggleClass('js-active');
}, {offset: '20%' });

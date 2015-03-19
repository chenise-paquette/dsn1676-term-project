
var $menuBtn = $('.menu-btn');
var $fullList = $('.full-list');

$menuBtn.on('click', function () {
    $fullList.toggleClass('js-menu-open');
});
    
    
var $tabs = $('.tabs');
var $panel = $('.panel');
    
$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    
    $panel.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
    
    $tabs.find('.js-current').removeClass('js-current');
    $(this).addClass('js-current');
    
});
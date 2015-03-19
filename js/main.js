var $menuBtn = $('.menu-btn');
var $fullList = $('.full-list');

$menuBtn.on('click', function () {
    $fullList.toggleClass('js-menu-open');
});
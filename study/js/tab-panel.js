$('.tab-list').each(function () { // Find lists of tabs
    var $this = $(this); // Store this list
    var $tab = $this.find('li.active'); // Get the active list item
    var $link = $tab.find('a'); // Get link from active tab
    var $panel = $($link.attr('href')); // Get active panel

    $this.on('click', '.tab-control', function (e) { // When click on a tab
        e.preventDefault(); // Prevent link behavior
        var $link = $(this),
            id = this.hash; //현재링크를 저장한 후 클릭한 탭의 href 특성 값을 가져온다.

        if (id && !$link.is('.active')) { //a에 .active가 아닐 경우
            $panel.removeClass('active'); // Make panel inactive
            $tab.removeClass('active'); // Make tab inactive

            $panel = $(id).addClass('active'); // Make new panel active
            $tab = $link.parent().addClass('active'); // Make new tab active 
        }
    });
});
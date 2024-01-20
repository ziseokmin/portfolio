$(function() {
    
    //a 링크 동작 막기
    $(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    });
    
    setParallax();   
    function setParallax() {
        var numPage = 0;
        var pageNow = 0;
        var pagePrev = 0;
        var pageNext = 0;
        var direction = 0;
        var isWheelBlocked = false;
        var timerId = '';
        var effectTimerId = '';
        
        showPage(1);
        $('.fixed-box:eq(0)').addClass('up');
        
        $(window).on('mousewheel DOMMouseScroll', function(e) {
            clearTimeout(timerId);
            timerId = setTimeout(function() {isWheelBlocked = false}, 300);
            if (isWheelBlocked === true) return false;
            isWheelBlocked = true;
            //정규화
             if (e.originalEvent.wheelDelta === undefined) { //FF
                direction = e.originalEvent.detail / 1;
            } else { //표준
                direction = e.originalEvent.wheelDelta / -120;
            }
            if (direction > 0) { //mousewheel down 
                if (pageNow === numPage) {
                    return false;
                } else {
                    showPage(pageNext);
                }
            } else { //mousewheel up
                if (pageNow === 1) {
                    return false;
                } else {
                    showPage(pagePrev);
                }
            }
        });
        
        function showPage(n) {
            console.log(n);
            clearTimeout(effectTimerId);

            $('.fixed-box').removeClass('up down hide-down hide-up');
            if (n === pageNext) {
            $('.fixed-box:eq(' + (n - 2) + ')').addClass('hide-down');
                effectTimerId = setTimeout(function() {
                    $('.fixed-box:eq(' + (n - 2) + ')').removeClass('hide-down');
                    $('.fixed-box:eq(' + (n - 1) + ')').addClass('up');
                }, 300);
            } else if (n === pagePrev) {
                $('.fixed-box:eq(' + n + ')').addClass('hide-up');
                effectTimerId = setTimeout(function() {
                     $('.fixed-box:eq(' + n + ')').removeClass('hide-up');
                     $('.fixed-box:eq(' + (n - 1) + ')').addClass('down');
                }, 300);
            }
            pageNow = n;
            pagePrev = (n - 1) < 1 ? 1 : n - 1;
        }
        
    }
});

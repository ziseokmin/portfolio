$(document).ready(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $(".project_header").height()-100 ){
            $("header").addClass("on");
        }else{
            $("header").removeClass("on");
        }
    });
    $(".scroll_btn > a").click(function(e){
        e.preventDefault();
        var Target = $(this).attr("href");

        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 300);
    });
    /*헤더 이벤트*/
    var shrinkheader = 10;
    $(window).scroll(function(){
        var scroll = getCurrentScroll();
        if(scroll >= shrinkheader){
            $('header').addClass('shrink');
        }else{
            $('header').removeClass('shrink');
        }
    });
    function getCurrentScroll(){
        return window.pageYOffset ||
        document.documentElement.scrollTop;
    }
})
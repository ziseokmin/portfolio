$(document).ready(function() {
	$(".menuButton").on('click',function(){
		if($(this).hasClass("is_active")){
			$(this).removeClass("is_active");
			$(".menu_con").animate({'left':'-100%'},900);
		}else{
			$(this).addClass("is_active");
			$(".menu_con").animate({'left':'0'},900);
		}
	});
	$(".menu_btn > ul > li a").on('click',function(){
		$(".menuButton").removeClass("is_active");
		$(".menu_con").animate({'left':'-100%'},900);
	});
    $(".menu_btn > ul > li:nth-child(3)").click(function(){
        var submenu = $(this).children("ul");
        // submenu �� ȭ��� ���϶��� ���� ������� ���� �ƴϸ� �Ʒ��� ������� ��ġ��
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
	$(function(){
		 $(".menu_btn > ul > li > a").click(function() {
			 var scrollPosition = $($(this).attr("href")).offset().top;

			$("html,body").animate({
				scrollTop: scrollPosition
			}, 500);
		});
	});
});
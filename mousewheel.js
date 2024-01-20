$(document).ready(function(){

	/*원페이지 슬라이드*/
	var win_h = $(window).height();

	$("section").each(function(index){
		$(this).attr("data-index",win_h * index);
	});

	$("section").on("mousewheel", function(e){
		var sectionPos = parseInt($(this).attr("data-index"));
		if (e.originalEvent.wheelDelta >= 0) {
			$("html,body").stop().animate({scrollTop:sectionPos - win_h},800);
			return false;
		} else if (e.originalEvent.wheelDelta < 0) {
			$("html,body").stop().animate({scrollTop:sectionPos + win_h},800);
			return false;
		}
	});

	/*웬페이지 슬라이드 반응형*/
	$( window ).resize(function() {

		var win_h = $(window).height();

		$("section").each(function(index){
			$(this).attr("data-index",win_h * index);
		});

		$("section").on("mousewheel", function(e){
			var sectionPos = parseInt($(this).attr("data-index"));
			if (e.originalEvent.wheelDelta >= 0) {
				$("html,body").stop().animate({scrollTop:sectionPos - win_h},800);
			return false;
			} else if (e.originalEvent.wheelDelta < 0) {
				$("html,body").stop().animate({scrollTop:sectionPos + win_h},800);
			return false;
			}
		});
	});

	/*스크롤버튼*/
		$(window).on("scroll", function() {
			if($(window).scrollTop() > $("#home").height()-100 ) {
				$(".line").css({"opacity":"1"});
				$(".scroll_btn").css({"opacity":"1"});

				if ($(window).scrollTop() == ($(document).height() - $(window).height())) {
					$(".scroll_btn").css({"opacity":"0"});
				} else {
					$(".scroll_btn").css({"opacity":"1"});
				}
			} else {
			   $(".line").css({"opacity":"0"});
			   $(".scroll_btn").css({"opacity":"0"});
			}
		});

	/*위치값에 따른 애니메이션*/
	var isVisible = false;

	$(window).on('scroll',function() {
		if (checkVisible($('#home'))&&!isVisible) {
			$(".sub_tit > h4").text("Web Design Portfolio");
		}
		if (checkVisible($('#about'))&&!isVisible) {
			$(".sub_tit > h4").text("About");
		}
		if (checkVisible($('#about2'))&&!isVisible) {
			$(".sub_tit > h4").text("About");
		}
		if (checkVisible($('#project'))&&!isVisible) {
			$(".sub_tit > h4").text("Project");
		}
		if (checkVisible($('#contact'))&&!isVisible) {
			$(".sub_tit > h4").text("Contact");
		}
	});
	function checkVisible( elm, eval ) {
		eval = eval || "object visible";
		var viewportHeight = $(window).height() - 100, // Viewport Height
			scrolltop = $(window).scrollTop() , // Scroll Top
			y = $(elm).offset().top,
			elementHeight = $(elm).height();   
		
		if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
		if (eval == "above") return ((y < (viewportHeight + scrolltop)));
	}

	/*타임라인 애니메이션*/
	$(".time_line_list").each(function  (index) {
		var $itemList = $(this);
		var $item = $itemList.find("li");
		var itemLength = $item.length;
		var startNum = 0;
		var rollingSpeed = 2000;
		
		function visualTime(){
			if(startNum < ( itemLength - 1)){
				startNum++;
			}else{
				startNum = 0;
			}
			visualPlay();
		}
		function visualPlay(){
			$item.each(function(id){
					if(id == startNum){
						$(this).addClass("active");
					}else{
						$(this).removeClass("active");
					}
			});
		};
		visualPlay();
		var visual_timer = setInterval(visualTime,rollingSpeed);
	});

	/*인트로화면 타이핑 효과*/
	var typingBool = false; 
	var typingIdx=0; 
	var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
		typingTxt=typingTxt.split(""); // 한글자씩 자른다.
			
	if(typingBool==false){ // 타이핑이 진행되지 않았다면 
			typingBool=true; 
			
	var tyInt = setInterval(typing,300); // 반복동작 
	} 
			
	function typing(){ 
		if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
			$(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
			typingIdx++; 
		} else{ 
			clearInterval(tyInt); //끝나면 반복종료 
		} 
	} 
	/*work z-index*/
	if ($('#other_work').length) {
		var zIndex = 100;
	
		$('.work').hover(function() {
		  $(this).css({
			'z-index': zIndex++ 
		  });
		});
	}
});
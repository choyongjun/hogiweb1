"use strict";

(function($) {
	$(document).on('appinit', function() {
		var $bodyheight = $(window).height();
		var $isScrolling = false;
		var arrY=[]
			for(var i = 0; i<=2; i++){
				arrY[i] = $bodyheight*i
		}
		var num = 0;
		
		$('.page').height($bodyheight)
		$(window).bind("mousewheel", function(event) {
			if($isScrolling == false) {
				$isScrolling = true;
				if(event.originalEvent.wheelDelta < 0) {
					num++
					if(num > 2){num=2}
					$("body").animate({ "scrollTop": $bodyheight*num }, 500, function() { $isScrolling = false; });
					nav_on()
				}else {
					num--
					if(num <= 0){num=0}
					$("body").animate({ "scrollTop": $bodyheight*num }, 500, function() { $isScrolling = false; });
					nav_on()
				};   
			}
			return false;
		});
		
		$(".location_btn").on("click", function(){
			$(".page li ul li").removeClass("on");
			$(".page-map").addClass("on");
		});
		$(".close_btn").on("click", function(){
			$(".page-map").removeClass("on");
			num = 0;
			nav_on();
		});
		
		$(".nav li").on('click',function(){
			num = $(this).index()
			nav_on()
		});
		
		
		
		
		
		
		
		
		
		
		var cnt=0, timer=0, delay=500;
		$(".page li ul li").removeClass("on");
		var $timer = timer=setInterval(section,delay);
		$timer
		function section(){
			cnt++
			if(cnt>=20){cnt=0};
			if(cnt==1){
				$(".section ul li").removeClass("on");
			}else if(cnt==3){
				$(".eq-03").addClass("on");
			}else if(cnt==4){
				$(".eq-09").addClass("on");
			}else if(cnt==5){
				$(".eq-01").addClass("on");
			}else if(cnt==7){
				$(".eq-02").addClass("on");
			}else if(cnt==8){
				$(".eq-04").addClass("on");
			}else if(cnt==10){
				$(".eq-05").addClass("on");
			}else if(cnt==12){
				$(".eq-06").addClass("on");
			}else if(cnt==14){
				$(".eq-07").addClass("on");
			}else if(cnt==16){
				$(".eq-08").addClass("on");
			};
			
		};
		
		function nav_on(){
			$(".page li ul li").removeClass("on");
			clearInterval(timer);
			cnt=0;
			$('.nav li').removeClass("on");
			$('.nav li').eq(num).addClass("on");
			$("body").animate({ "scrollTop": $bodyheight*num }, 500)
			timer=setInterval(section,delay);
			
		};
		
	});
	
	
	
	
	$(document).on('ready', function() {

		
	});
	/*
	var $isScrolling = false;
	var $bodyheight = $(window).height();
	
	
		$('.page').height($bodyheight)
		//$(".page li h1").text("scrollTop:"+$('body').scrollTop());
		
		$(window).bind("mousewheel", function(event) {
			var num = 0;
			if($isScrolling == false) {
				$isScrolling = true;
				if(event.originalEvent.wheelDelta < 0) {
					$("body").animate({ "scrollTop": "+="+ $bodyheight +"px" }, 0, function() { $isScrolling = false; });
					
				}else {
					$("body").animate({ "scrollTop": "-="+ $bodyheight +"px" }, 0, function() { $isScrolling = false; });
					
				};
				nav_on();
			}
			
			return false;
		});
		
		$(".location_btn").on("click", function(){
			$(".page li ul li").removeClass("on");
			$(".page-map").addClass("on");
		});
		$(".close_btn").on("click", function(){
			$(".page-map").removeClass("on");
			stopIt();
			nav_on();
		});
		
		$(".nav li").on('click',function(){
			nav_on();
			$(".nav li").removeClass("on");
			$(this).addClass("on");
		});
		
	});

	$(document).on('ready', function() {
		
	});
	
	
	function $thisTop(){
		$("body").scrollTop();
	} 

	var cnt=0, timer=0, delay=500;
	$(".page li ul li").removeClass("on");
	var $timer = timer=setInterval(section,delay);
	$timer
	function section(){
		cnt++
		if(cnt>=20){cnt=0};
		if(cnt==1){
			$(".section ul li").removeClass("on");
		}else if(cnt==3){
			$(".eq-03").addClass("on");
		}else if(cnt==4){
			$(".eq-09").addClass("on");
		}else if(cnt==5){
			$(".eq-01").addClass("on");
		}else if(cnt==7){
			$(".eq-02").addClass("on");
		}else if(cnt==8){
			$(".eq-04").addClass("on");
		}else if(cnt==10){
			$(".eq-05").addClass("on");
		}else if(cnt==12){
			$(".eq-06").addClass("on");
		}else if(cnt==14){
			$(".eq-07").addClass("on");
		}else if(cnt==16){
			$(".eq-08").addClass("on");
		};
		
	};

	function stopIt(){
		$(".page li ul li").removeClass("on");
		clearInterval(timer);
		cnt=0;
	}

	function nav_on(){
		var $navLi = $('.nav li').removeClass("on");
		if($("body").scrollTop() < $bodyheight*1){
			$navLi
			$('.nav li').eq(0).addClass("on");
			timer=setInterval(section,delay);
			console.log($('body').scrollTop());
		}else if($("body").scrollTop() < $bodyheight*2){
			$navLi
			$('.nav li').eq(1).addClass("on");
			timer=setInterval(section,delay);
			console.log($('body').scrollTop());
		}else if($("body").scrollTop() < $bodyheight*3){
			$navLi
			$('.nav li').eq(2).addClass("on");
			timer=setInterval(section,delay);
			console.log($('body').scrollTop());
		};
		stopIt();
	}
	*/
	
})(jQuery);

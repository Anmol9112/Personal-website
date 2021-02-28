$(window).on("load",function(){
	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});
	$('.items').isotope({
		filter:'*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
	$("#filters a").click(function(){
		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");
		$('.items').isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});
});
$(document).ready(function(){
	'use strict';
	// Scroll
	$('.scrollto').click(function(e){
		e.preventDefault();
		var scrollElm = $(this).attr('href');
		var scrollTo = $(scrollElm).offset().top;
		$('html, body').animate({ scrollTop: scrollTo - 50 }, "slow");
	});

$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	// var typed = new Typed(".typed",{
	// 	strings: ["Software Engineer|"], 
	// 	// "Web Developer."],
	// 	typeSpeed:70,
	// 	// loop:true,
	// 	// startDelay:1000,
	// 	showCursor: false
	// });
	
	$(".owl-carousel").owlCarousel({
		loop:true,
		autoplay: true,
		items:4,
		autoPlay:true,
		items:4,
		itemsDesktop:[1000,4],
		itemsDesktopSmall:[900,3],
		itemsTablet:[600,2],
		itemsMobile:[480,1]
	});

		 
		 var skillsTopOffset = $(".skillsSection").offset().top;
		 var statsTopOffset = $(".statsSection").offset().top;
		 var countUpFinished=false;

		 $(window).scroll(function(){
		 	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
			 	$('.chart').easyPieChart({
	            easing: 'easeInOut',
	            barColor: '#fff',
	            trackColor: false,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from,to,percent){
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });
	  }
	  if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
		$(".counter").each(function(){
			var element=$(this);
			var endVal=parseInt(element.text());
			element.countup(endVal);
		})
		countUpFinished=true;
	  }

	});
	$("[data-fancybox]").fancybox();
	// $(".items").isotope({
	// 	filter: '*',
	// 	animationOptions: {
	// 		duration: 1500,
	// 		easing: 'linear',
	// 		queue: false
	// 	}
	// });
	// $("#filters a").click(function(){
	// 	$("#filters .current").removeClass("current");
	// 	$(this).addClass("current");

	// 	var selector = $(this).attr("data-filter");
	// 	$('.items').isotope({
	// 		filter: selector,
	// 		animationOptions: {
	// 			duration: 1500,
	// 			easing: 'linear',
	// 			queue: false
	// 		}
	// 	});
	// 	return false;
	// });

     $("#navigation li a").click(function(e){
		 e.preventDefault();
		 var targetElement = $(this).attr("href");
		 var targetPosition = $(targetElement).offset().top;
		 $("html,body").animate({scrollTop: targetPosition - 50}, "slow");
	 })


	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll",stickyNavigation);
	function stickyNavigation(){
		var body = $("body");
		if($(window).scrollTop()>=navTop){
			body.css("padding-top", nav.outerHeight()+"px");
			body.addClass("fixedNav");
		}else{
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}
});
});


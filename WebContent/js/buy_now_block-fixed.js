$(window).scroll(function(){
	if($(this).scrollTop() >= 500){
		$(".BuyNowBlock").css("position","fixed").css("top","200px");
	}
	if($(this).scrollTop() < 500){
		$(".BuyNowBlock").css("position","absolute").css("top","600px");
	}
});
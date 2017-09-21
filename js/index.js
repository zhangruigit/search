(function(){

})();

$(function(){

	//hmfri_slide 滚动
	$('.hmfri_slide ul').carouFredSel({
			auto : true,
			direction : "left",
			prev : ".hmfri_slide .pre",
			next : ".hmfri_slide .next",
			scroll : {				
					timeoutDuration: 5000
				}
		});

});	
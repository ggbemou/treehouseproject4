$(".gallery a").simpleLightbox({

		sourceAttr: 'href',
		overlay: true,
		spinner: true,
		captions: true,
		captionDelay: 0,
		captionSelector: 'img',
		captionType: 'attr',
		captionPosition: 'bottom',
		captionsData: 'title',
		close: true,
		closeText: 'X',
		showCounter: true,
		animationSlide: true,
		animationSpeed: 250,

		preloading: true,
		docClose: true,
		alertError: true,
	});

	$("document").ready(function(){

  $(".gallery a").fadeIn();

});

$("document").ready(function(){
	$("#search").simplelightbox({
		attribute:"data-title"
	});
});

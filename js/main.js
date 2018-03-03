$(".gallery a").simpleLightbox({

		sourceAttr: 'href',
		overlay: true,
		spinner: true,
		captions: true,
		captionDelay: 0,
		captionSelector: 'img',
		captionType: 'attr',
		captionPosition: 'bottom',
		captionsData: 'alt',
		close: true,
		closeText: 'X',
		showCounter: true,
		animationSlide: true,
		animationSpeed: 250,

		preloading: true,
		docClose: true,
		alertError: true,
	});
<script>
var input, filter,() => {
	a=document.querySelectorAll(a"[alt]");
	input=document.getElementByName('myInput');
	filter=input.value.toUpperCase();
	a=document.getElementByclass("gallery");
	for (i=0; i<a.length; i++){
		a=document.getElementBytagName("a")[0];
		if (a.InnerHtml.toUpperCase().indexOf(filter))>-1 || $(a.data("alt"))===filter.toLocalLowerCase()){
			a[1].style.display="";
		} else{ a[1].style.display="none";
		}
	}
}
</script>

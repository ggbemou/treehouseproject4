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
//added variables
//var input;
//var a;
//function
function () {
	//add getElementBid
	a=document.querySelectorAll(a"[alt]");
	//add input
	input=document.getElementById('search');
 	filter=input.value.toUpperCase();
	//get elementby gallery
 	a=document.getElementByclass("gallery");
	//for loop
 	for (i=0; i<a.length; i++){
		a=document.getElementBytagName("a")[0];
 		if (a.InnerHtml.toUpperCase().indexOf(filter))>-1 || $(a.data("alt"))===filter.toLocalLowerCase()){
 			a[1].style.display="";
 		} else{ a[1].style.display="none";
 		}
 	}
 }

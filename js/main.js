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
//having hardtime getting this one right
//declare variables
var input, filter, caption, a;
input=document.getElementById("search");

 a=document.getElementsByTagName("a");
$("#search").on("keyup", function(){
for (i=0; i<a.length; i++){
	filter=input.value.toLowerCase();
 caption=a[i].firstChild.getAttribute("alt")[0];
	if (caption.indexOf(filter)>-1){
		a[i].style.display="";
	} else {
		a[i].style.display="none";
	}
	}
});

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

//declare variables
var input, filter, caption;
input=document.getElementById("search");
filter=input.value.toUpperCase();
//for loop
for (i=0; i<a.length; i++){
	let caption=a[i].firstchild.getAttribute("alt")[0];
	if (caption.toUpperCase().indexOf(filter)>-1 || $(a).data("alt")===filter.toLocalLowerCase()){
		a.style.display="";
	} else {
		a[i].style.display="none";
	}
	}

}

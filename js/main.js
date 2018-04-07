//plugins code
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
//search bar for loop
//declare variables
var input, filter, caption, a;
//will search document by ID
input = document.getElementById("search");
//will search document by tagName
a = document.getElementsByTagName("a");
//keyup event
$("#search").on("keyup", function() {
   //for loop
   for (i = 0; i < a.length; i++) {
      //case sensitive
      filter = input.value.toLowerCase();
      caption = a[i].firstChild.getAttribute("alt").toLowerCase();
      //condition
      if (caption.indexOf(filter) > -1) {
         //conditional statement
         a[i].style.display = "";
      } else {
         a[i].style.display = "none";
      }
   }
});

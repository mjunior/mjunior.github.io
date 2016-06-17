var index = Math.floor((Math.random() * 4));
var videos = ["video1.mp4","video2.mp4","video3.mp4","video4.mp4"]
console.log('Rodando: '+videos[index]);
document.querySelector("video > source").src = videos[index];
document.querySelector("video").load();

if(window.location.hash) {
  var hash = window.location.hash;
  if(hash === '#obrigado'){
  	setTimeout(function(){
  		document.querySelector('#success-form').style.transform='scale(1)';
  		window.location.href.substr(0, window.location.href.indexOf('#'))
  	},500)
  }
}

window.onscroll = function (e) {  
	var el = skills = document.querySelector(".skills");
	if(elementInViewport(el)){
		var skills = document.querySelectorAll(".skill .bar span");
		for(i=0;i<skills.length;i++){
			var size = skills[i].getAttribute("data-total");
			skills[i].style.width = size;
		}
	}
	console.log('email');
}

//Diz se elemento está visivel
function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

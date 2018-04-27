var g = document.querySelectorAll('svg > g');
var gArray = Array.from(g);
var paintings = Math.floor(Math.random() * g.length);

window.addEventListener('load', function(){
			console.log('loaded');
			generateRandomPainting();
			
});


function generateRandomPainting() {
	for(var i = 0; i<gArray.length; i++){
		if(i === paintings){
			g[i].style.opacity = "1";
			console.log(i);
		}
	};
};



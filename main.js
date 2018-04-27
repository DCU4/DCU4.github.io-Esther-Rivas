$(document).ready(function(){
	$(".image-container, body").each(function(index) {
    $(this).animate({
    	opacity:1
    }, (index+1)*400 );
	});


	$('.menu-wrapper').on('click',function(){
		$('.menu-2').toggleClass('menu-2-opacity');
		$('.menu-1').toggleClass('menu-1-rotate');
		$('.menu-3').toggleClass('menu-3-rotate');
		$('.menu-item').each(function(i){
			var t = $(this);
			setTimeout(function(){
				t.toggleClass('menu-open');	
			}, (5-i) * 100);
		});
	});

	$('.image-container').on('click',function(){

		var image = $('.image-container');
		var container = $('.cover');
		var containerInner = $('.inside-cover');
		container.fadeIn();
		image.addClass('no-hover');

		$('.exit').on('click',function(){
			container.fadeOut();
			image.removeClass('no-hover');
					
		});

	});


	$('img').on('click',function(){
		var newSource = $(this).attr('src');
		// alert(newSource);
		$('.inside-cover-image').attr('src', newSource);
	});
	

});





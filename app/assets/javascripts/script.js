$(document).ready(function() {
	
	//Slider
	$("#slider").carousel({
		interval: 5000
	});
	
	$("#testi").carousel({
		interval: 4000
	});
	
	$("#itemsingle").carousel({
		interval: false
	});

	var $alert = $('.alert').alert()
	setTimeout(function () {
  	$alert.alert('close')
}, 3000)



});


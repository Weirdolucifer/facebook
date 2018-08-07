$(function(){
	
	var currentValue = $('#currentValue');
	
	$("#slider").slider({ 
		max: 10,
		min: 0,
		slide: function(event, ui) {
			currentValue.html(ui.value);
		}
	});
	
});

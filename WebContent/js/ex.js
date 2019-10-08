$(function() {
	
	
	
	

$('#upsize').click(function() {
		let msg = $('#msg3');
		let cur = parseInt(msg.css('font-size'));
		msg.css('font-size', cur * 2);
	});
	
	

	$('#downsize').click(function() {
		let msg = $('#msg3');
		let cur = parseInt(msg.css('font-size'));
		msg.css('font-size', cur > 1 ? cur / 2 : 1);
	});

	
		  $('#upsizee').click(function(){
			  let imgn = $('#imgn3');
			  let cur = parseInt(imgn.attr('width'));
			  let cur_1 = parseInt(imgn.attr('height'));
			  imgn.attr('width', cur * 1.5);
			  imgn.attr('height', cur * 1.5);
			  
		  });
		  
		  $('#downsizee').click(function() {
			  let imgn = $('#imgn3');
			  let cur = parseInt(imgn.attr('width'));
			  let cur_1 = parseInt(imgn.attr('height'));
			  imgn.attr('width', cur > 1 ? cur / 2 : 1);
			  imgn.attr('height', cur_1 > 1 ? cur / 2 : 1);
		  });
		  
});
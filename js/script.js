$(document).ready(function(){
	//ripples
	$("#header, .info").ripples({
		dropRadius: 20,
		perturbance: 0.6,
		interactive: true,
		resolution: 256
	});
//magnific popup
 $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
  	enabled: true,
  }
  });
)};
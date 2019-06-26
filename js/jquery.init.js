jQuery(function($){

	Drupal.behaviors.novacomm.init_page();
	$( window ).on('load', function() {
		// Run code
		Drupal.behaviors.novacomm.init_grid();
	});
	$(window).bind('orientationchange resize', function(){
		Drupal.behaviors.novacomm.init_page();
		Drupal.behaviors.novacomm.init_grid();
	});

});

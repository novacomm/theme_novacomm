/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.novacomm = {
    attach: function (context, settings) {
			$(function($){

				init_page();
				$( window ).load(function() {
					// Run code
					init_grid();
				});
				$(window).bind('orientationchange resize', function(){
					init_page();
					init_grid();
				});

			});
    }
  };

})(jQuery, Drupal);

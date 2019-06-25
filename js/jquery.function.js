/**
 * @file
 * Global utilities.
 *
 */
(function (jQuery, Drupal) {

  'use strict';

  Drupal.behaviors.novacomm = {
    attach: function (context, settings) {

      jQuery('.nav-item a.contact').parent().addClass('contact');

      //CONTACT
      jQuery('.navbar-nav').on('click', 'a.contact', function(){

       if(!jQuery('#block-contact').hasClass('open')) {
          jQuery(this).parent().addClass('open');
          jQuery('#block-contact').stop().animate({'top': 0}, 1000, 'swing');
          jQuery('#header').stop().animate({'top': 525}, 1000, 'swing');
          }
        else {
          jQuery(this).parent().removeClass('open');
          jQuery('#block-contact').stop().animate({'top': -525}, 1000, 'swing',function(){jQuery('#block-contact').removeClass('open')});
          jQuery('#header').stop().animate({'top': 0}, 1000, 'swing');
          }

        jQuery('#block-contact').toggleClass('open');
        return false;
      })

    jQuery('#block-contact').on('click', '#btn-contact-close', function(){
      jQuery('.nav-item.contact').removeClass('open');
      jQuery('#block-contact').stop().animate({'top': -525}, 1000, 'swing',function(){jQuery('#block-contact').removeClass('open')});
      jQuery('#header').stop().animate({'top': 0}, 1000, 'swing');
      return false;
    })



    jQuery('a.smoove-lk').on('click',function(e){
      e.preventDefault();

      var target = this.hash;
      jQuery.target = jQuery(target);
      var offset = 0;
      jQuery('html, body').stop().animate({
        'scrollTop': jQuery(target).offset().top - offset
      }, 1.5*jQuery(target).offset().top, 'swing', function () {
        window.location.hash = target;
      });
    });

       /*jQuery('.change_view').bind('click',function(){
        if(!jQuery(this).hasClass('active')){
          jQuery('.change_view').toggleClass('active');

          if(jQuery('#project-container').hasClass('grid-container')){
            jQuery('.items ').each( function() { jQuery(this).hoverdir().destroy(); });
            jQuery('#project-container').removeClass('grid-container');
            jQuery('#project-container').addClass('list-container');
          }
          else{
            jQuery('.items ').each( function() { jQuery(this).hoverdir(); });
            jQuery('#project-container').removeClass('list-container');
            jQuery('#project-container').addClass('grid-container');
          }
        }
        return false;
      })
      }


      function init_mobile_menu(){
        jQuery('.mob-nav-btn').unbind('click');
        jQuery('.mob-nav-btn').bind('click',function(){
          jQuery('.menu-nav').slideToggle('');
          return false;
        });
      }*/
    }
  };

})(jQuery, Drupal);

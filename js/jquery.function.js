/**
 * @file
 * Global utilities.
 *
 */
(function (jQuery, Drupal) {

  'use strict';

  Drupal.behaviors.novacomm = {
    attach: function (context, settings) {

      //CONTACT
      jQuery('.nav-item a.contact').on('click', function(){

        // if(jQuery('#block-contact').css('height') == '0px')
        if(!jQuery('#block-contact').hasClass('open')) {
          jQuery(this).parent().addClass('open');
          //jQuery('#block-contact').addClass('open');
          jQuery('#block-contact').stop().animate({'top': 0}, 1000, 'swing');
          jQuery('#header').stop().animate({'top': 525}, 1000, 'swing');
          }
        else {
          jQuery(this).parent().removeClass('open');
          jQuery('#block-contact').stop().animate({'top': -525}, 1000, 'swing',function(){jQuery('#block-contact').removeClass('open')});
          jQuery('#header').stop().animate({'top': 0}, 1000, 'swing');
          }

        return false;
        })

     jQuery('#btn-contact-close').on('click', function(){
      console.log('ok');
        jQuery('#btn-contact').removeClass('open');
        jQuery('#block-contact').stop().animate({'top': -525}, 1000, 'swing',function(){jQuery('#block-contact').removeClass('open')});
          jQuery('#header').stop().animate({'top': 0}, 1000, 'swing');
        return false;
        })

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


      function init_smoove(){
        //inner menu smooth move
        jQuery('a.smoove-lk').unbind('click');

        jQuery('a.smoove-lk').bind('click',function(e){
          e.preventDefault();

          var target = this.hash;
          jQuerytarget = jQuery(target);
          var offset = 0;
          jQuery('html, body').stop().animate({
            'scrollTop': jQuery(target).offset().top - offset
          }, 1.5*jQuery(target).offset().top, 'swing', function () {
            window.location.hash = target;
          });
        });
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

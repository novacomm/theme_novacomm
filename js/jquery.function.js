/**
 * @file
 * Global utilities.
 *
 */
(function (jQuery, Drupal) {
  Drupal.behaviors.novacomm = {
    attach: function (context, settings) {
    }
  };

  Drupal.behaviors.novacomm.init_page = function() {

  // Slider on related projects for small screens.
  if (jQuery(window).width() < 481) {
    jQuery(document).ready(function(){
      jQuery('.field--name-field-related-projects .field__items').bxSlider();
    });
  }

  jQuery('.nav-item a.contact').parent().addClass('contact');
  init_smoove();

  //CONTACT
      jQuery('.nav-item').on('click', 'a.contact', function(){

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


  jQuery('.mob-nav-btn').unbind('click');

  if(document.body.clientWidth <= 960 && document.body.clientWidth > 800)
    {
    jQuery('body').addClass('mq960');
    jQuery('body').removeClass('desktop');
    jQuery('body').removeClass('mq800');

    }
  else if(document.body.clientWidth <= 800 && document.body.clientWidth > 640)
    {
    jQuery('body').removeClass('mq960');
    jQuery('body').removeClass('desktop');
    jQuery('body').addClass('mq800');

    }
  else
    {

    jQuery('body').addClass('mobile');
    jQuery('body').removeClass('mq960');
    jQuery('body').removeClass('mq800');
    init_mobile_menu();
    }
  }

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

    jQuery('.header-inner').on('click', '.mob-nav-btn', function(e){
       jQuery(this).parent().find('.menu-nav').slideToggle('');
      return false;
    });

//GRID

  Drupal.behaviors.novacomm.init_grid = function(){


    jQuery('.cat_nav').removeClass('active');
    jQuery('.cat_nav[href~=all]').addClass('active');

    init_grid_el('.move-container','.item-lk',0);

    jQuery('.cat_nav').unbind('click');

    jQuery('.cat_nav').on('click',function(){

      if(!jQuery(this).hasClass('active')){
        jQuery('.cat_nav').removeClass('active');
        jQuery(this).addClass('active');

        if(jQuery(this).attr('href') == 'all'){
          init_grid_el('.move-container','.item-lk',2);

        }
        else{
          jQuery('.item-lk:not(".'+jQuery(this).attr('href')+'")').addClass('onGoingDisappear');
          jQuery('.item-lk:not(".'+jQuery(this).attr('href')+'")').css(
            {
              'transform': 'scale(0.01)',
              '-webkit-transition-property': 'transform,opacity',
              'transition-property': 'transform,opacity',
              '-webkit-transition-duration': '0.6s',
              'transition-duration': '0.6s',
              '-webkit-transition-timing-function': 'ease-in-out',
              'transition-timing-function': 'ease-in-out',
              'opacity': '0'
            }
          );

          jQuery('.item-lk.'+jQuery(this).attr('href')).show();

          init_grid_el('.move-container','.item-lk.'+jQuery(this).attr('href'),1);

        }

      }
      return false;
    });
  }

  function init_grid_el(main_container, item,init){

    var container_width = jQuery(main_container).width();

    var num_item = jQuery(item).length;
    var item_width = jQuery(item).width();

    var item_height = jQuery(item).height();

    var num_item_row = ~~ (container_width/item_width);
    var num_row = Math.ceil(num_item/num_item_row);
    var container_height = Math.ceil(num_row * item_height);


    jQuery(main_container).css('position','relative');
    jQuery(main_container).css('height',container_height);

    jQuery.each(jQuery(item), function(index){

      var current_row = ~~ (index/num_item_row);
      var current_col = index-(current_row*num_item_row);
      var new_left = current_col*item_width;
      var new_top = current_row*item_height;
      if(init == 0){

        jQuery(this).css(
          {
            'position':'absolute',
            'transform': 'scale(1) translate3d(0px, 0px, 0)',
            '-webkit-transition-property': 'transform,opacity',
            'transition-property': 'transform,opacity',
            'opacity':'1',
            'display':'inline',
            'left': new_left,
            'top': new_top
          }
        );
      }
      else if(init == 1){

        jQuery(this).css(
          {
            'position':'absolute',
            'transform': 'scale(1) translate3d('+(new_left-parseInt(jQuery(this).css('left')))+'px, '+(new_top-parseInt(jQuery(this).css('top')))+'px, 0)',
            '-webkit-transition-property': 'transform,opacity',
            'transition-property': 'transform,opacity',
            '-webkit-transition-duration': '0.6s',
            'transition-duration': '0.6s',
            '-webkit-transition-timing-function': 'ease-in-out',
            'transition-timing-function': 'ease-in-out',
            'opacity':'1',
            'display':'inline'
          }
        );
      }
      else if(init == 2){

        jQuery(this).css(
          {
            'position':'absolute',
            'transform': 'scale(1) translate3d(0px, 0px, 0)',
            '-webkit-transition-property': 'transform,opacity',
            'transition-property': 'transform,opacity',
            '-webkit-transition-duration': '0.6s',
            'transition-duration': '0.6s',
            '-webkit-transition-timing-function': 'ease-in-out',
            'transition-timing-function': 'ease-in-out',
            'opacity':'1',
            'display':'inline'
          }
        );
      }

    })
  }

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
  }
})(jQuery, Drupal);

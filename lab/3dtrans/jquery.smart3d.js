(function($) {
  $.fn.smart3d = function(settings) {
  
    var thisObj = this;
    if (thisObj.length == 0) return false;
    var thisEl = thisObj[0];
    
    // Settings
    settings = jQuery.extend({
      frameWidth: $('>li', thisEl).width(),
      frameHeight: $('>li', thisEl).height(),
      horizontal: true,     
      vertical: true,
      firstStatic: false, 
      lastStatic: false,
      invertHorizontal: false,
      invertVertical: false
    }, settings);
    
    // Deprecated Options
    if (typeof settings['first_is_static'] != 'undefined') settings['firstStatic'] = settings['first_is_static'];
    if (typeof settings['last_is_static']  != 'undefined') settings['lastStatic']  = settings['last_is_static'];
    if (typeof settings['frame_width']  != 'undefined') settings['frameWidth']  = settings['frame_width'];
    if (typeof settings['frame_height'] != 'undefined') settings['frameHeight'] = settings['frame_height'];
    // end Deprecated Options
    
    var width = thisObj.width();
    var height = thisObj.height();
    var offset_x = settings['frameWidth'] - width;
    var offset_y = settings['frameHeight'] - height;
    
    thisObj.css('padding', '0');
    thisObj.css('overflow', 'hidden');
    thisObj.css('position', 'relative');
    thisObj.css('list-style', 'none');
        
    var lis = thisObj.find('>li');
    
    lis.css('padding', '0');
    lis.css('margin', '0');
    lis.css('position', 'absolute');
    lis.css('width', settings['frameWidth']);
    lis.css('height', settings['frameHeight']);
    
    if (settings['horizontal']) 
      lis.css('left', (width - settings['frameWidth']) / 2);
    else lis.css('left', '0');
      
    if (settings['vertical']) 
      lis.css('top', (height - settings['frameHeight']) / 2);
    else lis.css('top', '0');
      
    thisObj.pos_x = 0;
    thisObj.pos_y = 0;

        

    thisObj.mousemove(function(e){
      if (settings['horizontal']) {
        var scroll = $('html').scrollLeft();
        if (! scroll) scroll = $('body').scrollLeft();
        var x = e.clientX - thisObj.offset().left + scroll;
        if (x > width) x = width;
        
        if (settings['invertHorizontal'])
          thisObj.pos_x = offset_x / 2 - (x / width * offset_x);
        else
          thisObj.pos_x = (x / width * offset_x) - offset_x / 2;
      }
      if (settings['vertical']) {
        var scroll = $('html').scrollTop();
        if (! scroll) scroll = $('body').scrollTop();
        var y = e.clientY - thisObj.offset().top + scroll;
        if (y > height) y = height;

        if (settings['invertVertical']) 
          thisObj.pos_y = offset_y / 2 - (y / height * offset_y);
        else
          thisObj.pos_y = (y / height * offset_y) - offset_y / 2;
      }
    });
    
    function smart3d_animate(){
      for (var i=1; i<=lis.length; i++){
        if ((settings['lastStatic']) && (i == lis.length))
          continue;
        if ((settings['firstStatic']) && (i == 1))
          continue;
        
        if (settings['horizontal']) {
          var cur_l = parseFloat(jQuery(lis[i-1]).css('left'));
          var new_l = thisObj.pos_x * (i / lis.length) - offset_x / 2;
          //if (Math.abs(cur_l - new_l) > 1)
            jQuery(lis[i-1]).css('left', (new_l + cur_l*6) / 7);
        }
        if (settings['vertical']) {
          var cur_l = parseFloat(jQuery(lis[i-1]).css('top'));
          var new_l = thisObj.pos_y * (i / lis.length) - offset_y / 2;
          //if (Math.abs(cur_l - new_l) > 1)
            jQuery(lis[i-1]).css('top', (new_l + cur_l*6) / 7);

        }
      }
    }
    
    setInterval(smart3d_animate, 40);
    return this;
  };
})(jQuery); 
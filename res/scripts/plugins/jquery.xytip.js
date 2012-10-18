/**
 * xyTip plugin v1.0
 * 2012-09-21
 * 
 * 参数设置 
 *  gravity: nw | n | ne | w | e | sw | s | se, function(){}
 *  html: 设置是否以 html 输出
 *  offset: 与目标元素的间距
 *  opacity: 透明度
 */
(function($) {
    
  function fixTitle($ele) {
    if ($ele.attr('title') || typeof($ele.attr('original-title')) != 'string') {
      $ele.attr('original-title', $ele.attr('title') || '').removeAttr('title');
    }
  }
    
  function Tipsy(element, options){
      this.$element = $(element);
      this.options = options;
      this.enabled = true;
      fixTitle(this.$element);
  }
  
  Tipsy.prototype = {
    show: function(){
      var title = this.getTitle();
      if (title && this.enabled) {
        var $tip = this.tip();
        
        $tip.find('.xytip-inner')[this.options.html ? 'html' : 'text'](title);
        $tip[0].className = 'xytip'; // reset classname in case of dynamic gravity
        $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);
        
        var pos = $.extend({}, this.$element.offset(), {
          width: this.$element[0].offsetWidth,
          height: this.$element[0].offsetHeight
        });
        
        var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
        var gravity = (typeof this.options.gravity == 'function')
                        ? this.options.gravity.call(this.$element[0])
                        : this.options.gravity;
        
        var tp;
        switch (gravity.charAt(0)) {
          case 'n':
            tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
            break;
          case 's':
            tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
            break;
          case 'e':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
            break;
          case 'w':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
            break;
        }
        
        if (gravity.length == 2) {
          if (gravity.charAt(1) == 'w') {
            tp.left = pos.left + pos.width / 2 - 15;
          } else {
            tp.left = pos.left + pos.width / 2 - actualWidth + 15;
          }
        }
        
        $tip.css(tp).addClass('xytip-' + gravity);
        
        if (this.options.fade) {
          $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
        } else {
          $tip.css({visibility: 'visible', opacity: this.options.opacity});
        }
      }
    },
    
    hide: function() {
      if (this.options.fade) {
        this.tip().stop().fadeOut(function() { $(this).remove(); });
      } else {
        this.tip().remove();
      }
    },
    
    getTitle: function() {
      var title, $e = this.$element, o = this.options;
      fixTitle($e);
      var title, o = this.options;
      if (typeof o.title == 'string') {
        title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
      } else if (typeof o.title == 'function') {
        title = o.title.call($e[0]);
      }
      title = ('' + title).replace(/(^\s*|\s*$)/, "");
      return title || o.fallback;
    },
    
    tip: function() {
      if (!this.$tip) {
        this.$tip = $('<div class="xytip"></div>').html('<div class="xytip-arrow"></div><div class="xytip-inner"></div>');
      }
      return this.$tip;
    },
    
    validate: function() {
      if (!this.$element[0].parentNode) {
        this.hide();
        this.$element = null;
        this.options = null;
      }
    },
    
    enable: function() { this.enabled = true; },
    disable: function() { this.enabled = false; },
    toggleEnabled: function() { this.enabled = !this.enabled; }
  };
  
  $.fn.xytip = function(options) {
      
    if (options === true) {
      return this.data('xytip');
    } else if (typeof options == 'string') {
      return this.data('xytip')[options]();
    }
      
    options = $.extend({}, $.fn.xytip.defaults, options);
      
    function get(ele) {
      var xytip = $.data(ele, 'xytip');
      if (!xytip) {
        xytip = new Tipsy(ele, $.fn.xytip.elementOptions(ele, options));
        $.data(ele, 'xytip', xytip);
      }
      return xytip;
    }
      
    function enter() {
      var xytip = get(this);
      xytip.hoverState = 'in';
      if (options.delayIn == 0) {
        xytip.show();
      } else {
        setTimeout(function() { if (xytip.hoverState == 'in') xytip.show(); }, options.delayIn);
      }
    };
    
    function leave() {
      var xytip = get(this);
      xytip.hoverState = 'out';
      if (options.delayOut == 0) {
        xytip.hide();
      } else {
        setTimeout(function() { if (xytip.hoverState == 'out') xytip.hide(); }, options.delayOut);
      }
    };
    
    if (!options.live) this.each(function() { get(this); });
    
    if (options.trigger != 'manual') {
      var binder   = options.live ? 'live' : 'bind'
        , eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus'
        , eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
      this[binder](eventIn, enter)[binder](eventOut, leave);
    }
    
    return this;
  };
  
  $.fn.xytip.defaults = {
    delayIn: 0,           // 显示的延迟
    delayOut: 0,          // 隐藏延迟
    fade: false,          // 淡入、淡出效果
    fallback: '',         // title 不存在是，显示默认 tip 
    gravity: 's',        // 'n': 下, 's': 上, 'e': 左, 'w': 右, $.fn.xytip.autoNS
    html: true,           // 设置是否以 html 输出
    live: false,          // 动态设置 tip
    offset: 3,            // 与目标元素的间距
    opacity: 0.8,         // 透明度
    title: 'title',       // 包含tip的属性或callback
    trigger: 'hover'      // 触发方式: hover / false
  };
  
  // Overwrite this method to provide options on a per-element basis.
  // For example, you could store the gravity in a 'xytip-gravity' attribute:
  // return $.extend({}, options, {gravity: $(ele).attr('xytip-gravity') || 'n' });
  // (remember - do not modify 'options' in place!)
  $.fn.xytip.elementOptions = function(ele, options) {
    return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
  };
  
  $.fn.xytip.autoNS = function() {
    return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
  };
  
  $.fn.xytip.autoWE = function() {
    return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
  };
    
})(jQuery);

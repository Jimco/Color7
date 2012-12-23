jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});(function(window, undefined){

    window.XY = window.XY || {};

    XY.dom = {
        getById: function(id) {
            return document.getElementById(id);
        },

        get: function(e) {
            return (typeof (e) == "string") ? document.getElementById(e) : e;
        },

        createElementIn: function(tagName, elem, insertFirst, attrs) {
            var _e = (elem = XY.dom.get(elem) || document.body).ownerDocument.createElement(tagName || "div"), k;
            if (typeof (attrs) == 'object') {
                for (k in attrs) {
                    if (k == "class") {
                        _e.className = attrs[k];
                    } else if (k == "style") {
                        _e.style.cssText = attrs[k];
                    } else {
                        _e[k] = attrs[k];
                    }
                }
            }
            insertFirst ? elem.insertBefore(_e, elem.firstChild) : elem.appendChild(_e);
            return _e;
        },

        getStyle: function(el, property) {
            el = XY.dom.get(el);
            if (!el || el.nodeType == 9) {
                return null;
            }
            var w3cMode = document.defaultView && document.defaultView.getComputedStyle, computed = !w3cMode ? null : document.defaultView.getComputedStyle(el, ''), value = "";
            switch (property) {
                case "float":
                    property = w3cMode ? "cssFloat" : "styleFloat";
                    break;
                case "opacity":
                    if (!w3cMode) {
                        var val = 100;
                        try {
                            val = el.filters['DXImageTransform.Microsoft.Alpha'].opacity;
                        } catch (e) {
                            try {
                                val = el.filters('alpha').opacity;
                            } catch (e) {
                            }
                        }
                        return val / 100;
                    } else {
                        return parseFloat((computed || el.style)[property]);
                    }
                    break;
                case "backgroundPositionX":
                    if (w3cMode) {
                        property = "backgroundPosition";
                        return ((computed || el.style)[property]).split(" ")[0];
                    }
                    break;
                case "backgroundPositionY":
                    if (w3cMode) {
                        property = "backgroundPosition";
                        return ((computed || el.style)[property]).split(" ")[1];
                    }
                    break;
            }
            if (w3cMode) {
                return (computed || el.style)[property];
            } else {
                return (el.currentStyle[property] || el.style[property]);
            }
        },

        setStyle: function(el, properties, value) {
            if (!(el = XY.dom.get(el)) || el.nodeType != 1) {
                return false;
            }
            var tmp, bRtn = true, w3cMode = (tmp = document.defaultView) && tmp.getComputedStyle, rexclude = /z-?index|font-?weight|opacity|zoom|line-?height/i;
            if (typeof (properties) == 'string') {
                tmp = properties;
                properties = {};
                properties[tmp] = value;
            }
            for (var prop in properties) {
                value = properties[prop];
                if (prop == 'float') {
                    prop = w3cMode ? "cssFloat" : "styleFloat";
                } else if (prop == 'opacity') {
                    if (!w3cMode) {
                        prop = 'filter';
                        value = value >= 1 ? '' : ('alpha(opacity=' + Math.round(value * 100) + ')');
                    }
                } else if (prop == 'backgroundPositionX' || prop == 'backgroundPositionY') {
                    tmp = prop.slice(-1) == 'X' ? 'Y' : 'X';
                    if (w3cMode) {
                        var v = XY.dom.getStyle(el, "backgroundPosition" + tmp);
                        prop = 'backgroundPosition';
                        typeof (value) == 'number' && (value = value + 'px');
                        value = tmp == 'Y' ? (value + " " + (v || "top")) : ((v || 'left') + " " + value);
                    }
                }
                if (typeof el.style[prop] != "undefined") {
                    el.style[prop] = value + (typeof value === "number" && !rexclude.test(prop) ? 'px' : '');
                    bRtn = bRtn && true;
                } else {
                    bRtn = bRtn && false;
                }
            }
            return bRtn;
        },

        getScrollTop: function(doc) {
            var _doc = doc || document;
            return Math.max(_doc.documentElement.scrollTop, _doc.body.scrollTop);
        },

        getClientHeight: function(doc) {
            var _doc = doc || document;
            return _doc.compatMode == "CSS1Compat" ? _doc.documentElement.clientHeight : _doc.body.clientHeight;
        }
    };

    XY.string = {
        RegExps: {
            trim: /^\s+|\s+$/g,
            ltrim: /^\s+/,
            rtrim: /\s+$/,
            nl2br: /\n/g,
            s2nb: /[\x20]{2}/g,
            URIencode: /[\x09\x0A\x0D\x20\x21-\x29\x2B\x2C\x2F\x3A-\x3F\x5B-\x5E\x60\x7B-\x7E]/g,
            escHTML: { 
                re_amp: /&/g,
                re_lt: /</g,
                re_gt: />/g,
                re_apos: /\x27/g,
                re_quot: /\x22/g},
                escString: {
                    bsls: /\\/g,
                    sls: /\//g,
                    nl: /\n/g,
                    rt: /\r/g,
                    tab: /\t/g
                },
                restXHTML: {
                    re_amp: /&amp;/g,
                    re_lt: /&lt;/g,
                    re_gt: /&gt;/g,
                    re_apos: /&(?:apos|#0?39);/g,
                    re_quot: /&quot;/g
                },
                write: /\{(\d{1,2})(?:\:([xodQqb]))?\}/g,
                isURL: /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i,
                cut: /[\x00-\xFF]/,
                getRealLen: {
                    r0: /[^\x00-\xFF]/g,
                    r1: /[\x00-\xFF]/g
                },
                format: /\{([\d\w\.]+)\}/g
            },
            commonReplace: function(s, p, r) {
            return s.replace(p, r);
        },

        format: function(str) {
            var args = Array.prototype.slice.call(arguments), v;
            str = String(args.shift());
            if (args.length == 1 && typeof (args[0]) == 'object') {
                args = args[0];
            }
            XY.string.RegExps.format.lastIndex = 0;
            return str.replace(XY.string.RegExps.format, function(m, n) {
                v = XY.object.route(args, n);
                return v === undefined ? m : v;
            });
        }
    };


    XY.object = {
        routeRE: /([\d\w_]+)/g,
        route: function(obj, path) {
            obj = obj || {};
            path = String(path);
            var r = XY.object.routeRE, m;
            r.lastIndex = 0;
            while ((m = r.exec(path)) !== null) {
                obj = obj[m[0]];
                if (obj === undefined || obj === null) {
                    break;
                }
            }
            return obj;
        }
    };

    var ua = XY.userAgent = {}
        , agent = navigator.userAgent;
    ua.ie = 9 - ((agent.indexOf('Trident/5.0') > -1) ? 0 : 1) - (window.XDomainRequest ? 0 : 1) - (window.XMLHttpRequest ? 0 : 1);



    if (typeof (XY.msgbox) == 'undefined') {
        XY.msgbox = {};
    }
    XY.msgbox._timer = null;
    XY.msgbox.loadingAnimationPath = XY.msgbox.loadingAnimationPath || ("../js/msgbox/loading.gif");
    XY.msgbox.show = function(msgHtml, type, timeout, opts) {
        if (typeof (opts) == 'number') {
            opts = {topPosition: opts};
        }
        opts = opts || {};
        var _s = XY.msgbox,
         template = '<span class="xy_msgbox_layer" style="display:none;z-index:10000;" id="mode_tips_v2"><span class="gtl_ico_{type}"></span>{loadIcon}{msgHtml}<span class="gtl_end"></span></span>', loading = '<img src="' + (opts.customIcon || _s.loadingAnimationPath) + '" alt="" />', typeClass = [0, 0, 0, 0, "succ", "fail", "clear"], mBox, tips;
        _s._loadCss && _s._loadCss(opts.cssPath);
        mBox = XY.dom.get("q_Msgbox") || XY.dom.createElementIn("div", document.body, false, {className: "xy_msgbox_layer_wrap"});
        mBox.id = "q_Msgbox";
        mBox.style.display = "";
        mBox.innerHTML = XY.string.format(template, {type: typeClass[type] || "hits",msgHtml: msgHtml || "",loadIcon: type == 6 ? loading : ""});
        _s._setPosition(mBox, timeout, opts.topPosition);
    };
    XY.msgbox._setPosition = function(tips, timeout, topPosition) {
        timeout = timeout || 5000;
        var _s = XY.msgbox, bt = XY.dom.getScrollTop(), ch = XY.dom.getClientHeight(), t = Math.floor(ch / 2) - 40;
        XY.dom.setStyle(tips, "top", ((document.compatMode == "BackCompat" || XY.userAgent.ie < 7) ? bt : 0) + ((typeof (topPosition) == "number") ? topPosition : t) + "px");
        clearTimeout(_s._timer);
        tips.firstChild.style.display = "";
        timeout && (_s._timer = setTimeout(_s.hide, timeout));
    };
    XY.msgbox.hide = function(timeout) {
        var _s = XY.msgbox;
        if (timeout) {
            clearTimeout(_s._timer);
            _s._timer = setTimeout(_s._hide, timeout);
        } else {
            _s._hide();
        }
    };
    XY.msgbox._hide = function() {
        var _mBox = XY.dom.get("q_Msgbox"), _s = XY.msgbox;
        clearTimeout(_s._timer);
        if (_mBox) {
            var _tips = _mBox.firstChild;
            XY.dom.setStyle(_mBox, "display", "none");
        }
    }; 


})(window);
/**
 * 动画效果
 * Date: 2012-11-01
 */
$(function() {
  /* object to save the initial positions of each box */
  var divinfo = {"initial": []};
  /* index of the selected / clicked box */
  var current = -1;

  /* we save the index,top and left of each one of the boxes */
  $('#littleBoxes > div').each(function(){
    var $this = $(this);
    var initial = {
          'index': $this.index(),
          'top': $this.css('top'),
          'left': $this.css('left')
        };
    divinfo.initial.push(initial);
  });

  /* clcik event for the anchors inside of the boxes */
  $('#littleBoxes a.head').bind('click',function(e){
    var $this = $(this);
    var $currentBox = $this.parent();
    /* set a z-index lower than all the other boxes,
    to see the other boxes animation on the top*/
    $currentBox.css('z-index','1');

    /* if we are clicking on a expanded box : */
    if(current == $currentBox.index()){
      /* put it back (decrease width,height, and set the top and left like it was before).
      the previous positions are saved in the divinfo obj*/
      $currentBox.stop().animate({
        'top': divinfo.initial[$currentBox.index()].top,
        'left': divinfo.initial[$currentBox.index()].left,
        'width': '90px',
        'height': '90px'
      },800,'easeOutBack').find('.boxcontent').fadeOut();

      $('#littleBoxes > div').not($currentBox).each(function(){
        var $ele = $(this);
        var elemTop = divinfo.initial[$ele.index()].top;
        var elemLeft = divinfo.initial[$ele.index()].left;
        $ele.stop().show().animate({
          'top': elemTop,
          'left': elemLeft,
          'opacity': 1
        },800);
      });
      current = -1;
    }
    /* if we are clicking on a small box : */
    else{
      /* randomly animate all the other boxes.
      Math.floor(Math.random()*601) - 150 gives a random number between -150 and 450.
      This range is considering the initial lefts/tops of the elements. It's not the exact right
      range, since we would have to calculate the range based on each one of the boxes. Anyway, it
      fits our needs...
      */
      $('#littleBoxes > div').not($currentBox).each(function(){
        var $ele = $(this);
        $ele.stop().animate({
          'top': (Math.floor(Math.random()*601) - 150) +'px',
          'left': (Math.floor(Math.random()*601) - 150) +'px',
          'opacity':0
        },800,function(){
          $(this).hide();
        });
      });

      /* expand the clicked one. Also, fadeIn the content (boxcontent)
      if you want it to fill the space of the littleBoxes container,
      then these are the right values */
      var newwidth = 379;
      var newheight = 379;
      $currentBox.stop().animate({
        'top': '0px',
        'left': '0px',
        'width': newwidth +'px',
        'height': newheight+'px'
      },800,'easeOutBack',function(){
        current = $currentBox.index();
        $(this).find('.boxcontent').fadeIn();
      });

    }
    e.preventDefault();
  });
});

/**
 * 表单提交
 * Date: 2012-12-23
 */
$(function(){

  var mailUrl = 'mail/simpleEmail.php'
    , XY = window.XY || {};

  $('#msgBtn').on('click', function(e){
    var $target = $(e.currentTarget)
      , data = $('#mailMe').serializeArray()
      , dataObj = {};

    $target.find('img').show()
    $.each(data, function(i, data){
      dataObj[data.name] = data.value;
    });
    console.log(dataObj);
    $.ajax({
      type: 'POST',
      url: mailUrl,
      data: data,
      success: function(data){
        data = eval('(' + data + ')');
        $target.find('img').hide();
        $('#mailMe').find('input[type="text"], textarea').val('');
        XY.msgbox.show(data.username + "，来信已收到，我会尽快回复！", 4, 3000);
      }
    });
  });
      
});

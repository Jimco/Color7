/**
 * 二维码生成工具
 * Author: xiejiancong.com
 * Date； 2013-05-29
 */
(function($, window, undefined){

  var qrUrl = 'source/qrcode.php';

  // 生成二维码
  $('.qr-btn').on('click', 'button', function(e){
    var $target = $(e.currentTarget)
      , $cont = $('.qr-cont>div:visible')
      , $choose = $('.choose-type')
      , level = $choose.find('select[name="level"]').val()
      , size = $choose.find('select[name="size"]').val()
      , type = $cont.data('type')
      , params = $cont.wrap('<form/>').closest('form').serializeArray()
      , data = '';

    $cont.unwrap('<form/>');
    switch(type){
      case 'text':
      data = params[0].value;
      break;
      case 'card':
      data = 'MECARD:';
      $.each(params, function(i, n){ data += n.name + ':' + n.value + ';' });
      break;
    }
    if(!data){
      $.dialog({title: '提示', content: '亲，编码内容不能为空喔！', time: 2000});
      return;
    }
    $target.attr('disabled', true).siblings('.loading').show();
    $.post(qrUrl, {data: data, level: level, size: size}, function(data){
      data = typeof data === 'object' ? data : JSON.parse(data);
      $target.attr('disabled', false).siblings('.loading').hide();
      if(data.return_code !== 1){
        alert(data.msg);
        return;
      }
      $('#qr-show').html('<img src='+ data.img +'>');
      $.dialog({
        title: '二维码',
        content: '<div style="text-align:center;"><img src='+ data.img +'><div class="share"><a class="sinat" href="javascript:;" data-share="sina" title="分享到新浪微博"></a><a class="qqt" href="javascript:;" data-share="qq" title="分享到腾讯微博"></a><a class="renren" href="javascript:;" data-share="renren" title="分享到人人网"></a></div></div>'
      });
    });
  });

  // tab切换
  $('.qr-menu').on('click', 'li', function(e){
    var $target = $(e.currentTarget)
      , index = $target.index();
    $target.addClass('active').siblings('li').removeClass('active');
    $('.qr-cont').find('>div:eq('+ index +')').show().siblings('div').hide();
  });

  // 分享到新浪微博
  $('body').on('click', '.share a', function(e){
    var $target = $(e.currentTarget)
      , title = '扫一扫，就知道！'
      , imgurl = $target.parent().siblings('img').attr('src')
      , type = $target.data('share')
      , url = location.href
      , paramMap = {
        sina: 'http://service.weibo.com/share/share.php?url=' + encodeURIComponent(url) + '&appkey=4046751802&title=' + encodeURIComponent(title) + '&pic=' + encodeURIComponent(imgurl),
        qq: 'http://share.v.t.qq.com/index.php?c=share&a=index&url='+ encodeURIComponent(url) +'&appkey=801367677&title='+ encodeURIComponent(title) +'&pic='+ encodeURI(imgurl),
        renren: 'http://widget.renren.com/dialog/share?resourceUrl=' + encodeURIComponent(url) + '&pic='+ encodeURIComponent(imgurl) +'&title=' + encodeURIComponent(title)
      };

    window.open(paramMap[type], '_blank', 'width=615,height=600');
  });

})(jQuery, window);
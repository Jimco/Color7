/**
 * Note beta
 * Version: 0.1
 * Date: 2012-10-18
 */
(function(window, undefined){

  XY = window.XY || {};

  // 首页模块视图
  XY.Views.home = Backbone.View.extend({
    el: $("#wrap"),
    template : _.template($('#home').html()),
    events: {
      "click .more span": "homeAnim"
    },
    initialize: function(){
      console.log(this.model.toJSON());
      // this.model.on("change", this.render, this);
      // this.model.on("add", this.render, this);
      this.render();

    },
    homeAnim: function(){
      var toggle = this.$(".avatar img").is(":visible");
      if( !toggle ){
        this.$(".home")
          .stop(true,true)
          .animate({paddingTop: "-=20", paddingBottom: "-=20", top: "300"}, 500).delay(200)
          .animate({paddingTop: "+=20", paddingBottom: "+=20", top: "100"}, 500)
          .find(".avatar").stop(true,true).delay(700).animate({height: "270"}, 500)
          .find("img").stop(true,true).delay(1200).fadeIn(500).end().end()
          .find(".more i").text("-")
      }else{
        this.$(".home")
          .stop(true, true)
          .find(".avatar img").stop(true,true).fadeOut(300).end()
          .find(".avatar").stop(true,true).delay(350).animate({height: 0}, 500).end()
          .delay(350).animate({top: "280"}, 500).end()
          .find(".more i").text("+")
      }
    },
    render: function(){
      this.$el.html(this.template( this.model.toJSON() ))
    }

  });

  window.XY = XY;

})(window);

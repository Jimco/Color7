/**
 * Note beta
 * Version: 0.1
 * Date: 2012-10-18
 */
(function(W, undefined){

  var App = W.App = {
    Controller: {},
    Plugins: {},
    Model: {},
    Collection: {},
    View: {},
    initialize: function(){
      console.log("app start");
      new App.Controller.router();
      Backbone.history.start()
    }
  }

  // 用户 Model
  App.Model.user = Backbone.Model.extend({

  });

  // 首页 Model
  App.Model.home = Backbone.Model.extend({

  });

  // 消息 Model
  App.Model.note = Backbone.Model.extend({

  });

  // 消息 collection
  App.Collection.notes = Backbone.Collection.extend({
    model: App.Model.note,
    localStorage: new Store("xy-notes")

  });

  // 注册模块视图
  App.View.register = Backbone.View.extend({

  });

  // 首页模块视图
  App.View.home = Backbone.View.extend({
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

  // profile 页视图
  App.View.profile = Backbone.View.extend({
    el: $("#wrap"),
    template: _.template($("#profile").html()),
    initialize: function(){

      this.render();
    },
    render: function(){
      this.$el.html(this.template())
    }
  });

  var homeModel = new App.Model.home({title: "Jimco"});

  // 全局路由控制
  App.Controller.router = Backbone.Router.extend({
    routes: {
      "": "home",
      "!profile": "profile",
      "!note": "note",
      "!ask": "ask",
      "!write": "write"
    },
    home: function(){
      console.log("home start");
      new App.View.home({model: homeModel });
      
    },
    profile: function(){
      console.log("profile start");
      new App.View.profile;

    },
    note: function(){
      console.log("note start");

    },
    ask: function(){
      console.log("ask start")

    },
    write: function(){
      console.log("write start")

    }
  });

})(window);


$(function(){
  console.log("App init");
  App.initialize();
  $(".tooltip").xytip();

});

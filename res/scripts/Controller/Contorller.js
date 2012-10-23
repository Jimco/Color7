/**
 * Note beta
 * Version: 0.1
 * Date: 2012-10-18
 */
(function(XY){

  // 全局路由控制
  XY.Controller.router = Backbone.Router.extend({
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

})(window.XY);

$(function(){
  console.log("App init");
  App.initialize();
  $(".tooltip").xytip();

});


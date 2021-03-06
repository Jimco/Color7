/**
 * Note beta
 * Version: 0.1
 * Date: 2012-10-18
 */
(function(window, undefined){

  XY = window.XY || {};

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

      var homeModel = new XY.Models.home({title: "Jimco"});

      console.log("home start");
      new XY.Views.home({model: homeModel });
      
    },
    profile: function(){
      console.log("profile start");
      new XY.Views.profile;

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

  window.XY = XY;

})(window);

$(function(){
  console.log("App init");
  XY.initialize();
  $(".tooltip").xytip();

});


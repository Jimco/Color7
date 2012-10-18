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

  // 消息 Model
  App.Model.note = Backbone.Model.extend({

  });

  // 消息 collection
  App.Collection.notes = Backbone.Collection.extend({
    model: App.Model.note,
    localStorage: new Store("xy-notes")

  });

  // 全局路由控制
  App.Controller.router = Backbone.Router.extend({
    routes: {
      "": "home",
      "profile": "profile",
      "note": "note",
      "ask": "ask",
      "write": "write"
    },
    home: function(){
      console.log("home start");
      
    },
    profile: function(){
      console.log("profile start");

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

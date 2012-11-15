/**
 * Note beta
 * Version: 0.1
 * Date: 2012-10-18
 */
(function(window, undefined){

  window.XY = {

    Version: 0.2,
    Controller: {},
    Plugins: {},
    Models: {},
    Collections: {},
    Views: {},
    initialize: function(){
      console.log("app start");
      new XY.Controller.router();
      Backbone.history.start()
    }

  };

})(window);

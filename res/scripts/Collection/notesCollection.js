/**
 * Note beta
 * Version: 0.1
 * Date: 2012-10-18
 */
(function(XY){

  // 消息 collection
  App.Collection.notes = Backbone.Collection.extend({
    model: App.Model.note,
    localStorage: new Store("xy-notes")

  });


})(window.XY);

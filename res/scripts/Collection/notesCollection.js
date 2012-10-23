/**
 * Note beta
 * Version: 0.1
 * Date: 2012-10-18
 */
(function(XY){

  // 消息 collection
  XY.Collections.user = Backbone.Collection.extend({
    model: XY.Models.user,
    localStorage: new Store("xy-notes")

  });


})(window.XY);

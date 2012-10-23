/**
 * Note beta
 * Version: 0.1
 * Date: 2012-10-18
 */
(function(XY){

  // profile 页视图
  XY.Views.profile = Backbone.View.extend({
    el: $("#wrap"),
    template: _.template($("#profile").html()),
    initialize: function(){

      this.render();
    },
    render: function(){
      this.$el.html(this.template())
    }
  });

})(window.XY);

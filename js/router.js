Wrapli.Router.map(function() {
});

Wrapli.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('list');
  }
  //setupController: function(controller, list) {
  //console.log("Whee");
    //controller.set('model', list.get('items'));
  //}
});

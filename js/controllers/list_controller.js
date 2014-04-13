Wrapli.IndexController = Ember.ArrayController.extend({
  actions: {
  },
  count: function() {
    return this.get('length');
  }.property()
});

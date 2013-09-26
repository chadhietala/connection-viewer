var IndexRoute = Ember.Route.extend({

  model: function() {
    return this.store.findAll( 'user' );
  }

});

export default IndexRoute;

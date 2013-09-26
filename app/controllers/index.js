var IndexController = Ember.Controller.extend({

  newConnections: function () {
    var model = this.get( 'model' );
    return model.filterProperty( 'addConnection', true ).getEach( 'id' );
  }.property( 'model.@each.addConnection' ),

  actions: {
    addConnections: function () {
      //Persist
      alert( this.get( 'newConnections' ) );
    }
  }

});

export default IndexController;
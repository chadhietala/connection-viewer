var ConnectionViewerComponent = Ember.Component.extend({

  totalPendingConnections: function () {
    var data = this.get( 'data' );
    return data.filterBy( 'addConnection', true ).get( 'length' );
  }.property( 'data.@each.addConnection' ),

  zeroConnections: function () {
    return this.get( 'totalPendingConnections' ) === 0;
  }.property( 'totalPendingConnections' ),

  toggleAll: function ( key, value) {
    var data = this.get( 'data' );

    if ( value === undefined ) {
      return !!data.get( 'length' ) && data.everyProperty( 'addConnection', true );
    } else {
      data.setEach( 'addConnection', value );
      return value;
    }
  }.property( 'data.@each.addConnection' )

});

export default ConnectionViewerComponent;
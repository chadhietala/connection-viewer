var PersonCardComponent = Ember.Component.extend({
  actions: {
    togglePerson: function () {

      if ( this.get( 'pendingConnection' ) ) {
        this.set( 'pendingConnection', false );
      } else {
        this.set( 'pendingConnection', true );
      }

    }
  }
/*  ,foo: function () {
    alert('sss')
  }.on( 'didInsertElement' )*/
});

export default PersonCardComponent;
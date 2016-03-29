import Ember from 'ember';

//this is our DELETE action
//passes RENTAL to DELETE and, if CONFIRM is true
//this.sendAction 'destroyRental', rental
export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if(confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});

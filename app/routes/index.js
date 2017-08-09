import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },

  actions: {
    logIn(params){
      let shadowUser = this.store.query('user', {orderBy: 'username', equalTo: params.username});
      console.log(shadowUser);
    }
  }
});

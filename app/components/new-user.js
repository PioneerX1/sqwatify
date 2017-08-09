import Ember from 'ember';
// import DS from "ember-data";

export default Ember.Component.extend({
  actions: {
    logIn(){
      let params = {
        username: this.get('username'),
        password: this.get('password')
      }
      console.log("Save1: " + params.username);

      this.sendAction('logIn', params);
    }
  }
});

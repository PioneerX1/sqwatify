import DS from 'ember-data';

export default DS.Model.extend({
  sqwatter: DS.belongsTo('user', { async: true }),
  content: DS.attr(),
  tags: DS.attr()
});

import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  slug: attr(),
  content: attr(),
  pagecontent: Ember.computed('content', function() {
    let text = this.get('content');
    try {
      return this.store.createRecord('django-page', { text });
    } catch(e) {
      console.warn('Could not find django-page model. Please install the nypr-django-for-ember addon'); // eslint-disable-line
      return text;
    }
    
  })
});

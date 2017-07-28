import Component from 'ember-component';
import service from 'ember-service/inject';
import config from 'ember-get-config';
import layout from '../templates/components/story-list';

export default Component.extend({
  layout,
  session: service(),
  tagName: 'section',
  adminURL: `${config.wnycAdminRoot}/admin`
});

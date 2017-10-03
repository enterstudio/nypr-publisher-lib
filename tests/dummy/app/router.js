import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mas', function() {
    this.route('models');
    this.route('adapters');
    this.route('serializers');
  });
  // BEGIN-SNIPPET nav-links-router
  this.route('components', function() {
    this.route('listing-pages', function() {
      this.route('nav-links', function() {
        // dummy routes for nav-links component
        this.route('page', {path: '*'});
      });
      // END-SNIPPET
      this.route('content-types');
      this.route('channel-header');
      this.route('x-marquee');
      this.route('social-links');
    });
    this.route('stories', function() {
      this.route('story-tease');
      this.route('story-comments');
      this.route('related-stories');
    });
    this.route('streams');
  });
  this.route('services');
});

export default Router;

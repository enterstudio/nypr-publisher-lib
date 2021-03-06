import DS from 'ember-data';
import { camelizeObject } from 'nypr-publisher-lib/helpers/camelize-object';

// BEGIN-SNIPPET story-serializer-fields
//dasherized versions of names in model bc they haven't been processsed yet
const propertiesWithChildren = [
  'appearances',
  'chunks',
  'headers',
  'image-main',
  'playlist',
  'producing-organizations',
  'segments',
  'series',
  'show-producing-orgs',
  'slideshow'
];
// END-SNIPPET

export default DS.JSONAPISerializer.extend({
  extractId: (modelClass, {attributes}) => attributes.slug,
  payloadKeyFromModelName: () => 'story',

  // BEGIN-SNIPPET story-serializer
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    for (var prop of propertiesWithChildren) {
      //if we have the property, process it
      if (payload.data.attributes && payload.data.attributes.hasOwnProperty(prop)){
        payload.data.attributes[prop] = camelizeObject(payload.data.attributes[prop]);
      }
    }

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  // END-SNIPPET

});

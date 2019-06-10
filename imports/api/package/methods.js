// Methods related to links

import { Meteor } from 'meteor/meteor';
import { Package, PackageSchema } from './package';

Meteor.methods({
  'package.insert': doc => {
    PackageSchema.validator();
    Package.insert(doc);
  },
  'package.delete': doc => {
    Package.remove(doc);
  },
  'package.update': doc => {
    const data = doc.modifier.$set;
    Package.update({ _id: doc._id }, {
      $set: {
        origin: data.origin,
        destination: data.destination,
        start: data.start,
        final: data.final,
        flight: data.flight
      }
    });
  }
});

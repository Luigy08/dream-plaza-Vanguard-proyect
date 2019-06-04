// Methods related to links

import { Meteor } from 'meteor/meteor';
import { Package, PackageSchema } from './package';

Meteor.methods({
  'package.insert': doc => {
    PackageSchema.validator();
    Package.insert(doc);
  }
});

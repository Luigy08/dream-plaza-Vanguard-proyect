import { Meteor } from 'meteor/meteor';
import { Package } from '../package';

Meteor.publish('package.all', () => Package.find());

import './home.html';
import '../../components/hello/hello';
import '../../components/info/info';
import { Template } from 'meteor/templating';
import { Package } from '../../../api/package/package';

Template.App_home.onCreated(() => {
  Meteor.subscribe('package.all');
});
Template.App_home.helpers({
  paquete () {
    return Package.find({ origin: 'hola', destination: 'hola' });
  },
  hola () {
    return 'hola como estas ......';
  }
});

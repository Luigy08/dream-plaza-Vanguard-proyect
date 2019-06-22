import './home.html';
import '../../components/hello/hello';
import '../../components/info/info';
import '../../components/flight/flight';
import { Template } from 'meteor/templating';
import { Package } from '../../../api/package/package';

Template.home.onCreated(() => {
  Meteor.subscribe('package.all');
  const arreglo = [];
  Session.set('packages', arreglo);
});
Template.home.helpers({
  paquete () {
    return Session.get('packages');
  },
  hola () {
    return 'hola como estas ......';
  }
});

Template.home.events({
  'click #search': function () {
    const temp = Package.find({
      origin: $('#originInput').val(),
      destination: $('#destinationInput').val(),
      start: $('#salidaInput').val(),
      final: $('#llegadaInput').val()
    }).fetch();
    Session.set('packages', temp);
  },
  'click .cardPackage': function () {
    Session.set('idPackage', this._id);
  }
});

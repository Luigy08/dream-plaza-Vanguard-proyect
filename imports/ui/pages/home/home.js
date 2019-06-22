import './home.html';
import '../../components/hello/hello';
import '../../components/info/info';
import '../../components/flight/flight';
import { Template } from 'meteor/templating';
import { Package } from '../../../api/package/package';

Template.App_home.onCreated(() => {
  Meteor.subscribe('package.all');
  Session.set('flights', 0);
});
Template.App_home.helpers({
  paquete () {
    // const paquetes = Package.find().map(package => {
    //   const { destination, final, flight, origin, start } = package;
    //   return {
    //     destination,
    //     final,
    //     airline: flight[0].airline,
    //     origin,
    //     start,
    //     flights: flight.length()
    //   };
    // });
    // console.log(paquetes);
    return Package.find();
  },
  aumentarFlight () {
    Session.set('flights', 0);
  },
  getFlight () {
    Session.get('flights');
  }
});

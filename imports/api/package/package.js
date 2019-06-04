// Definition of the users collection
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
const Package = new Mongo.Collection('package');
const Content = new SimpleSchema({
  from: {
    type: String,
    label: 'Desde',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-12 col-md-12 col-sm-12 col-12'
      }
    }
  },
  to: {
    type: String,
    label: 'a',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
      }
    }
  },
  airline: {
    type: String,
    label: 'Aerolínea',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
      }
    }
  },
  Departure: {
    type: String,
    label: 'Salida',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
      }
    }
  },
  Arrival: {
    type: String,
    label: 'Llegada',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
      }
    }
  }
});
const PackageSchema = new SimpleSchema({
  origin: {
    type: String,
    label: 'Nombre',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
      }
    }
  },
  destination: {
    type: String,
    label: 'Nombre',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
      }
    }
  },
  start: {
    type: String,
    label: 'Fecha de Inicio',
    autoform: {
      type: 'date',
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
      }
    }
  },
  final: {
    type: String,
    label: 'Fecha Final',
    optional: true,
    autoform: {
      type: 'date',
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
      }
    }
  },
  flight: {
    type: Array,
    label: 'Flight',
    minCount: 1,
    maxCount: 10,
    optional: true
  },
  'flight.$': {
    type: Content,
    autoform: {
      bodyClass: 'panel-body row'
    }
  }
}, { check: check, tracker: Tracker, clean: { getAutoValues: true } });

Package.deny({
  insert () { return true; },
  update () { return true; },
  remove () { return true; }
});

Package.attachSchema(PackageSchema);

export {
  PackageSchema,
  Package
};

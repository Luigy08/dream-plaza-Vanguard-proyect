// Definition of the users collection
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
const Package = new Mongo.Collection('package');
const Content = new SimpleSchema({
  airline: {
    type: String,
    label: 'Aerolínea',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-12 col-md-12 col-sm-12 col-12'
      }
    }
  },
  from: {
    type: String,
    label: 'Desde',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
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
    label: 'Origen',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-6 col-md-6 col-sm-12 col-12'
      }
    }
  },
  destination: {
    type: String,
    label: 'Destino',
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
    label: 'Vuelo',
    optional: true,
    minCount: 0,
    maxCount: 5,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col col-lg-12 col-md-12 col-sm-12 col-12'
      }
    }
  },
  'flight.$': {
    type: Content,
    autoform: {
      bodyClass: 'panel-body row'
    }
  }
}, { check: check, tracker: Tracker });

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

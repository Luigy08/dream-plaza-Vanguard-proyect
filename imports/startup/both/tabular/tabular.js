import Tabular from 'meteor/aldeed:tabular';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Package } from '../../../api/package/package';

const TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Package = new Tabular.Table({
  name: 'package',
  collection: Package,
  pub: 'package.all',
  responsive: true,
  autoWidth: false,
  info: false,
  search: {
    caseInsensitive: true,
    smart: true,
    onEnterOnly: false
  },
  columns: [
    {
      class: 'text-center',
      data: 'origin',
      titleFn: () => 'Origen'
    },
    {
      class: 'text-center',
      data: 'destination',
      titleFn: () => 'destino'
    },
    {
      class: 'text-center endTable',
      createdCell: Meteor.isClient && function updatePackage (cell, cellData, rowData) {
        return Blaze.renderWithData(Template.editPackage, {
          _id: rowData._id,
          slug: rowData.slug
        }, cell);
      }
    }
  ]
});

export default TabularTables;

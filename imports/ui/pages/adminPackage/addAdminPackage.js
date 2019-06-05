import './addAdminPackage.html';
import { Template } from 'meteor/templating';

import toastr from 'toastr';
import { Package } from '../../../api/package/package';

window.Package = Package;
Template.addAdminPackage.onCreated(() => {
  Meteor.subscribe('Package.all');
});
Template.addAdminPackage.onRendered(() => {
  $('#addAdminPackage').on('hidden.bs.modal', () => {
    AutoForm.resetForm('insertExamForm');
  });
});

AutoForm.addHooks('insertExamForm', {
  onSuccess: function () {
    toastr.success('Agregado');
  }
});

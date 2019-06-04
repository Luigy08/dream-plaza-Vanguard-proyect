import './addAdminPackage.html';
import { Template } from 'meteor/templating';

import toastr from 'toastr';
import { Package } from '../../../api/package/package';

Template.addAdminPackage.onCreated(() => {
  Meteor.subscribe('Package.all');
});
Template.addAdminPackage.onRendered(() => {
  $('#addAdminPackage').on('hidden.bs.modal', () => {
    AutoForm.resetForm('insertExamForm');
  });
});

Template.addAdminPackage.helpers({
  doc () {
    return Package;
  }
});
AutoForm.addHooks('insertExamForm', {
  onSuccess: function () {
    toastr.success('Agregado');
  }
});

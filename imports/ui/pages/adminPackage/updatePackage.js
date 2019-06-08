import './updatePackage.html';
import { Template } from 'meteor/templating';
import toastr from 'toastr';
import { PackageSchema } from '../../../api/package/package';

Template.updatePackage.onCreated(() => {
  Meteor.subscribe('Package.all');
});
Template.updatePackage.onRendered(() => {
  $('#updatePackage').on('hidden.bs.modal', () => {
    AutoForm.resetForm('updatePackageForm');
  });
});
Template.updatePackage.helpers({
  PackageSchema
});
AutoForm.addHooks('updatePackageForm', {
  onSuccess: function () {
    toastr.success('Actualizado');
  }
});

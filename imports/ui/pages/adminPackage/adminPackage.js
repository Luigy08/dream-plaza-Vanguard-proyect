import './adminPackage.html';
import './addAdminPackage';
import './updatePackage';

Template.adminPackage.events({
  'click #deletePackage': function () {
    Meteor.call('package.delete', { _id: this._id });
  },
  'click .updateExam': function () {
    Session.set('idExam', this._id);
  }
});

import './adminPackage.html';
import './addAdminPackage';

Template.adminPackage.events({
  'click .deleteExam': function () {
    Meteor.call('package.delete', { _id: this._id });
  },
  'click .updateExam': function () {
    Session.set('idExam', this._id);
  }
});

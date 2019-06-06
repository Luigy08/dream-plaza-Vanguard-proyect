import { Router } from 'meteor/iron:router';

// Import needed templates
import '../../ui/layouts/body/body';

import '../../ui/pages/home/home';
import '../../ui/pages/not-found/not-found';
import '../../ui/pages/adminPackage/adminPackage';
import '../../ui/pages/signup/signup';
import '../../ui/pages/login/login';

Router.configure({
  layoutTemplate: 'App_body',
  notFoundTemplate: 'App_notFound'
});

Router.route('/', {
  name: 'home',
  template: 'App_home'
});

Router.route('/admin-package', {
  name: 'adminPackage',
  template: 'adminPackage'
});

Router.route('/login', {
  name: 'login',
  template: 'login'
});

Router.route('/signup', {
  name: 'signup',
  template: 'signup'
});

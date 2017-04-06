import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '../imports/ui/containers/AppContainer.jsx';
import AdminContainer from '../imports/ui/containers/AdminContainer.jsx';
FlowRouter.route('/', {
  name: 'Display',
  action() {
    mount(AppContainer);
  }
});

FlowRouter.route('/admin', {
  name: 'Admin',
  action() {
    mount(AdminContainer);
  }
});
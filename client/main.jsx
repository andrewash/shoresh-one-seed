import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import DisplayContainer from '../imports/ui/containers/DisplayContainer.jsx';
import EntryContainer from '../imports/ui/containers/EntryContainer.jsx';
FlowRouter.route('/', {
  name: 'Entry',
  action() {
    mount(EntryContainer);
  }
});

FlowRouter.route('/seedling', {
  name: 'Display',
  action() {
    mount(DisplayContainer);
  }
});
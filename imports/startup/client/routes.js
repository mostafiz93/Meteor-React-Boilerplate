import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import SamplePage from '/imports/ui/pages/samplePage.jsx'

FlowRouter.route('/', {
  name: 'SamplePage',
  action(params, queryParams) {
      console.log("home route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(SamplePage);
  }
});

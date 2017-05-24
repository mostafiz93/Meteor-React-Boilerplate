import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { mount } from 'react-mounter';


//main.js specific files
//import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

FlowRouter.route('/', {
  name: 'Home',
  action(params, queryParams) {
      Meteor.userId() ? mount(Dashboard) : mount(Login);
  }
});

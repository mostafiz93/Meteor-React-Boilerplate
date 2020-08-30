import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import RegisterPage from '/imports/ui/pages/RegisterPage';
import LoginPage from '/imports/ui/pages/LoginPage';
import Container from '../../ui/layouts/Container';
import SampleComponentA from '../../ui/components/sampleComponents/SampleComponentA';
import SampleComponentB from '../../ui/components/sampleComponents/SampleComponentB';
import SampleComponentC from '../../ui/components/sampleComponents/SampleComponentC';

FlowRouter.route('/', {
	name: 'Homepage',
	action(params, queryParams) {
		Meteor.userId()
			? mount(Container, { content: <SampleComponentA /> })
			: mount(LoginPage);
	}
});
FlowRouter.route('/a', {
	name: 'Homepage',
	action(params, queryParams) {
		Meteor.userId()
			? mount(Container, { content: <SampleComponentA /> })
			: mount(LoginPage);
	}
});
FlowRouter.route('/b', {
	name: 'Homepage',
	action(params, queryParams) {
		Meteor.userId()
			? mount(Container, { content: <SampleComponentB /> })
			: mount(LoginPage);
	}
});
FlowRouter.route('/c', {
	name: 'Homepage',
	action(params, queryParams) {
		Meteor.userId()
			? mount(Container, { content: <SampleComponentC /> })
			: mount(LoginPage);
	}
});

FlowRouter.route('/register', {
	name: 'RegisterPage',
	action(params, queryParams) {
		console.log('home route is being called...');
		// Meteor.userId() ? mount(Dashboard) : mount(Login);
		mount(RegisterPage);
	}
});

FlowRouter.route('/login', {
	name: 'LoginPage',
	action(params, queryParams) {
		console.log('home route is being called...');
		// Meteor.userId() ? mount(Dashboard) : mount(Login);
		mount(LoginPage);
	}
});

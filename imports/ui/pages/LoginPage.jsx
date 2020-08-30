import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		document.body.style.background = '#004212 ';
	}

	componentWillUnmount() {
		document.body.style.background = '#FFF';
	}

	handleSubmit() {
		this.setState({ loginLoading: true });
		let code = ReactDOM.findDOMNode(this.refs.code).value;
		let password = ReactDOM.findDOMNode(this.refs.password).value;
		// console.log(code, password);
		Meteor.loginWithPassword(code, password, error => {
			console.log(error);
			if (error) window.alert("School code and password don't match.");
			// else FlowRouter.go('/');
			else location.reload();
		});
	}

	render() {
		const { loginLoading } = this.state;
		return (
			<div className='loginSectionCon'>
				<a href='#'>
					<img src='/images/logo.png' alt='Logo' className='loginLogo' />
				</a>
				<h2>লগইন</h2>
				<div className='logFieldContainer'>
					<p>ইউজারনেম/ইমেইল</p>
					<input
						type='text'
						className='loginField'
						ref='code'
						placeholder='ইউজারনেম/ইমেইল লিখুন'
					/>
					<p>পাসওয়ার্ড</p>
					<input
						type='password'
						className='loginField'
						ref='password'
						placeholder='পাসওয়ার্ড লিখুন'
					/>
					<br />
					<div className='two ui buttons'>
						<button
							className={'ui blue button' + (loginLoading ? ' loading' : '')}
							onClick={this.handleSubmit.bind(this)}
						>
							লগইন
						</button>
					</div>
				</div>
			</div>
		);
	}
}

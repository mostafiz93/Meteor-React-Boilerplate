import React, { Component } from 'react';
export default class SampleComponentB extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	render() {
		return <div className='contentContainer'>This is Sample Component B</div>;
	}
}

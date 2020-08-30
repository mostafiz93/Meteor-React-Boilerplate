import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/sidebar';
import Loading from '../components/utils/Loading';

export const UserContext = React.createContext();

export default class Container extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: undefined
		};
	}

	componentDidMount() {
		Tracker.autorun(() => {
			let user = Meteor.user();
			if (user) {
				this.setState({
					user: user
				});
			}
		});
	}

	render() {
		const { user } = this.state;
		const { content, ...props } = this.props;
		if (!user) {
			return <Loading />;
		}
		return (
			<UserContext.Provider value={user}>
				<div>
					<Topbar />
					<Sidebar user={this.state.user} />
					<div className='mainBody'>
						{React.cloneElement(this.props.content, {
							...props
						})}
					</div>
				</div>
			</UserContext.Provider>
		);
	}
}

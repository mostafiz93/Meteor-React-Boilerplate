import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Grid } from 'semantic-ui-react';
const { Row, Column } = Grid;

import Topbar from '/imports/ui/components/topbar/Topbar.jsx';
import TopBarOption from '/imports/ui/components/topbar/TopbarOptions.jsx';
import TopBarTitle from '/imports/ui/components/topbar/TopbarTitle.jsx';

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
			if (user)
				this.setState({
					user: user
				});
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
				<Grid>
					<Row>
						<TopBarTitle />
						<Topbar />
						<TopBarOption />
					</Row>
					<Row>
						<Column width={3}>
							<Sidebar user={this.state.user} />
						</Column>
						<Column width={13}>
							{React.cloneElement(this.props.content, {
								...props
							})}
						</Column>
					</Row>
				</Grid>
			</UserContext.Provider>
		);
	}
}

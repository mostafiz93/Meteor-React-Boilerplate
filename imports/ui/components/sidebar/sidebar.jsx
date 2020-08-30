import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
const { Row, Column } = Grid;

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className='sideBar'>
				<ul className='sideBarMenu'>
					<li>
						<a
							href='/a'
							className={FlowRouter.current().path == '/a' ? 'activeMenu' : ''}
						>
							<i className='calendar icon' />
							<span>Sidebar Option A</span>
						</a>
					</li>
					<li>
						<a
							href='/b'
							className={FlowRouter.current().path == '/b' ? 'activeMenu' : ''}
						>
							<i className='calendar icon' />
							<span>Sidebar Option B</span>
						</a>
					</li>
					<li>
						<a
							href='/c'
							className={FlowRouter.current().path == '/c' ? 'activeMenu' : ''}
						>
							<i className='calendar icon' />
							<span>Sidebar Option C</span>
						</a>
					</li>
					<li
						onClick={() => {
							Meteor.logout(err => {
								if (err) alert('Something went wrong.');
								location.reload();
							});
						}}
					>
						<a href='/#'>
							<Icon name='sign-out' />
							<span>Log out</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Random } from 'meteor/random';
import { withTracker } from 'meteor/react-meteor-data';
import { Store } from '../api/store.js';

export default class AddTeam extends Component {
	
	handleSubmit(event) {
		event.preventDefault();
		const team = {
			name: ReactDOM.findDOMNode(this.refs.name).value.trim(),
			desc: ReactDOM.findDOMNode(this.refs.desc).value.trim()
		}
		
		ReactDOM.findDOMNode(this.refs.name).value = '';
		ReactDOM.findDOMNode(this.refs.desc).value = '';
		
		this.props.onAddTeam(team);
	}

    render() {
		return (
			<form class="tile" onSubmit={this.handleSubmit.bind(this)}>
				<label>Team Name:</label><input ref="name"></input>
				<br />
				<label>Description:</label><textarea ref="desc"rows="4"></textarea>
				<br />
				<button type="submit" class="button--left">Add Team</button>
			</form>
        );
    }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Random } from 'meteor/random';
import { withTracker } from 'meteor/react-meteor-data';
import { Store } from '../api/store.js';

export default class AddChallenge extends Component {

	handleSubmit(event) {
		event.preventDefault();
		
		const challenge = {
			name: ReactDOM.findDOMNode(this.refs.name).value.trim(),
			desc: ReactDOM.findDOMNode(this.refs.desc).value.trim(),
			points: ReactDOM.findDOMNode(this.refs.points).value.trim()
		}

		// Clear form
		ReactDOM.findDOMNode(this.refs.name).value = '';
		ReactDOM.findDOMNode(this.refs.desc).value = '';
		ReactDOM.findDOMNode(this.refs.points).value = '';
		
		this.props.onAddChallenge(challenge);
	}
	
    render() {
		return (
			<form class="tile" onSubmit={this.handleSubmit.bind(this)}>
				<label>Challenge Name:</label><input ref="name"></input>
				<br />
				<label>Description:</label><textarea ref="desc" rows="4"></textarea>
				<br />
				<label>Points:</label><input type="number" ref="points" rows="4"></input>
				<br />
				<button type="submit" class="button--left">Add Challenge</button>
			</form>
        );
    }
}

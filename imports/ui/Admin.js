import React, { Component } from 'react';
import Team from './Team.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Teams } from '../api/teams.js';

class Admin extends Component {

    renderTeams() {
        return this.props.teams.map((team) => (
            <Team key={team._id} team={team} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header className="header">
                    <h1 className="header__title">Administration</h1>
                </header>
                <div className="team-list">
                    {this.renderTeams()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        teams: Teams.find({}).fetch(),
    };
})(Admin);


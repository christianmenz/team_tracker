import React, { Component } from 'react';
import Team from './Team.js';
import Challenge from './Challenge.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Store } from '../api/store.js';

class Admin extends Component {

    renderTeams() {
        return this.props.store.teams.map((team) => (
            <Team key={team._id} team={team} />
        ));
    }

    addChallenge() {
        this.props.store.challenges.push({ name: 'new challenge', description: 'awesome new challenge'});
        Store.update({ _id: this.props.store._id }, { $set: { challenges: this.props.store.challenges } })
    }

    addTeam() {
        this.props.store.teams.push({ name: 'new team', description: 'awesome new team', score: 0 });
        Store.update({ _id: this.props.store._id }, { $set: { teams: this.props.store.teams } })
    }

    resetStore() {
        Store.remove(this.props.store._id);
        Store.insert({ teams: [], challenges: [], state: [] });
    }

    renderTeamList() {
        if (this.props.store && this.props.store.teams) {
            return this.props.store.teams.map((team) => (
                <Team key={team._id} team={team} />
            ));
        } else {
            return 'Loading...'
        }
    }

    renderChallenges() {
        if (this.props.store && this.props.store.challenges) {
            return this.props.store.challenges.map((challenge) => (
                <Challenge key={challenge._id} challenge={challenge} />
            ));
        } else {
            return 'Loading...'
        }
    }

    render() {
        return (
            <div className="container">
                <header className="header">
                    <h1 className="header__title">Administration</h1>
                    <div className="header__buttons">
                        <button onClick={this.addTeam.bind(this)}>Add Team</button>
                        <button onClick={this.addChallenge.bind(this)}>Add Challenge</button>
                        <button onClick={this.resetStore.bind(this)}>Reset Database</button>
                    </div>
                </header>
                <div className="team-list">
                    {this.renderTeamList()}
                </div>

                <div className="team-list">
                    {this.renderChallenges()}
                </div>

            </div>
        );
    }
}

export default withTracker(() => {
    return {
        store: Store.findOne({})
    };
})(Admin);


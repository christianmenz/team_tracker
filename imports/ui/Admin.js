import React, { Component } from 'react';
import { Random } from 'meteor/random';
import Team from './Team.js';
import Challenge from './Challenge.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Store } from '../api/store.js';

class Admin extends Component {

    addChallenge() {
        this.props.store.challenges.push({ _id: Random.hexString(10), name: 'new challenge', description: 'awesome new challenge', points: 1 });
        this.props.store.teams.forEach(team => { // add the new challenge to each existing team
            team.results.push(false);
        });
        Store.update({ _id: this.props.store._id }, { $set: { challenges: this.props.store.challenges, teams: this.props.store.teams } });
        
    }

    addTeam() {
        let results = [];
        this.props.store.challenges.map(challenge => results.push(false));
        this.props.store.teams.push({ _id: Random.hexString(10), name: 'new team', description: 'awesome new team', results: results });
        Store.update({ _id: this.props.store._id }, { $set: { teams: this.props.store.teams } })
    }

    resetStore() {
        Store.remove(this.props.store._id);
        Store.insert({ teams: [], challenges: [] });
    }

    renderTeamList() {
        if (this.props.store && this.props.store.teams) {
            return this.props.store.teams.map((team) => (
                <Team key={team._id} team={team} />
            ));
        } else {
            return 'Loading teams...';
        }
    }

    renderChallenges() {
        if (this.props.store && this.props.store.challenges) {
            return this.props.store.challenges.map((challenge) => (
                <Challenge key={challenge._id} challenge={challenge} />
            ));
        } else {
            return 'Loading challenges...';
        }
    }

    changeResult(team, index, event) {
        team.results[index] = event.target.checked;
        Store.update({ _id: this.props.store._id }, { $set: { teams: this.props.store.teams } })
    }

    renderResults() {
        if (this.props.store) {
            return <table className="results-edit-table">
                <tbody>
                    <tr>
                        <td></td>
                        {this.props.store.challenges.map((challenge) => {
                            return <td>{challenge.name}</td>
                        })}
                    </tr>
                    {this.props.store.teams.map((team) => {
                        return <tr>
                            <td>{team.name}</td>
                            {team.results.map((result, index) => {
                                return <td>
                                    <input type="checkbox" checked={result} onChange={this.changeResult.bind(this, team, index)}></input>
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        } else {
            return 'Loading results...';
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

                <hr></hr>

                <div className="challenge-list">
                    {this.renderChallenges()}
                </div>

                <hr></hr>

                <div className="results">
                    {this.renderResults()}
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

